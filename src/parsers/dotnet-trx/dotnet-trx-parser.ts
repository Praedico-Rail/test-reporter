import {parseStringPromise} from 'xml2js'

import {ErrorInfo, Outcome, TrxReport, UnitTest, UnitTestResult} from './dotnet-trx-types'
import {ParseOptions, TestParser} from '../../test-parser'

import {getBasePath, normalizeFilePath} from '../../utils/path-utils'
import {parseIsoDate, parseNetDuration} from '../../utils/parse-utils'

import {
  TestExecutionResult,
  TestRunResult,
  TestSuiteResult,
  TestGroupResult,
  TestCaseResult,
  TestCaseError
} from '../../test-results'
import assert from 'assert'

class TestClass {
  constructor(readonly name: string) {}
  readonly tests: Test[] = []
}

class Test {
  constructor(
    readonly name: string,
    readonly outcome: Outcome,
    readonly duration: number,
    readonly error?: ErrorInfo
  ) {}

  get result(): TestExecutionResult | undefined {
    switch (this.outcome) {
      case 'Passed':
        return 'success'
      case 'NotExecuted':
        return 'skipped'
      case 'Failed':
        return 'failed'
    }
  }
}

function groupBy<Key, Item>(list: Item[], keyGetter: (item: Item) => Key): Map<Key, Item[]> {
  const map = new Map<Key, Item[]>()
  for (const item of list) {
    const key = keyGetter(item)
    const collection = map.get(key)
    if (!collection) {
      map.set(key, [item])
    } else {
      collection.push(item)
    }
  }
  return map
}

export class DotnetTrxParser implements TestParser {
  assumedWorkDir: string | undefined

  constructor(readonly options: ParseOptions) {}

  async parse(path: string, content: string): Promise<TestRunResult> {
    const trx = await this.getTrxReport(path, content)

    const testSuites: TestSuiteResult[] = []
    const totalTime: number | undefined = undefined

    if (trx.TestRun.TestDefinitions !== undefined) {
      assert(
        trx.TestRun.TestDefinitions !== undefined && trx.TestRun.TestDefinitions.length === 1,
        'Expected exactly one test definition'
      )

      const allUnitTests = trx.TestRun.TestDefinitions[0].UnitTest
      const unitTestsByClass = groupBy(allUnitTests, ut => ut.TestMethod[0].$.className)

      for (const [className, unitTests] of unitTestsByClass) {
        const groups: TestGroupResult[] = []
        const orphanedTestCaseResults: TestCaseResult[] = []
        for (const unitTest of unitTests) {
          assert(
            trx.TestRun.Results !== undefined && trx.TestRun.Results.length === 1,
            'Expected exactly one test result'
          )

          const testResults = trx.TestRun.Results[0].UnitTestResult.filter(tr => tr.$.testId === unitTest.$.id)

          if (testResults.length > 1) {
            const mainResult = testResults.find(tr => tr.$.testName === unitTest.$.name)

            assert(mainResult !== undefined, 'Could not find main result')

            const steps = testResults.filter(tr => tr.$.testName !== mainResult.$.testName)

            const sortedTests = steps.sort((a, b) => a.$.testName.localeCompare(b.$.testName))

            const testCaseResults = sortedTests.map(step => this.convertUnitTestResult(step))

            groups.push(new TestGroupResult(unitTest.$.name, testCaseResults))
          } else {
            orphanedTestCaseResults.push(this.convertUnitTestResult(testResults[0]))
          }
        }
        if (orphanedTestCaseResults.length > 0) {
          groups.push(new TestGroupResult(null, orphanedTestCaseResults))
        }
        groups.sort((a, b) => a.name?.localeCompare(b.name ?? '') ?? 0)

        testSuites.push(new TestSuiteResult(className, groups))
      }

      // result ->
      //  suites (name) -> mapped to class
      //    groups (name) -> test
      //      test-cases (name)  -> step

      // collections // no info
      // classes
      // facts | theory-instances
      // scenario steps
    }

    // const tc = this.getTestClasses(trx)
    // const tr = this.getTestRunResult(path, trx, tc)
    // tr.sort(true)
    // return tr
    testSuites.sort((a, b) => a.name?.localeCompare(b.name ?? '') ?? 0)
    return new TestRunResult(path, testSuites, totalTime)
  }

  private convertUnitTestResult(step: UnitTestResult): TestCaseResult {
    const errorInfo = this.getErrorInfo(step)

    const durationAttr = step.$.duration
    const duration = durationAttr ? parseNetDuration(durationAttr) : 0

    return new TestCaseResult(step.$.testName, this.mapUnitTestResultOutcome(step), duration, this.getError(errorInfo))
  }

  private async getTrxReport(path: string, content: string): Promise<TrxReport> {
    try {
      return (await parseStringPromise(content)) as TrxReport
    } catch (e) {
      throw new Error(`Invalid XML at ${path}\n\n${e}`)
    }
  }

  private mapUnitTestResultOutcome(result: UnitTestResult): TestExecutionResult {
    switch (result.$.outcome) {
      case 'Passed':
        return 'success'
      case 'NotExecuted':
        return 'skipped'
      case 'Failed':
        return 'failed'
    }
  }

  private getError(errorInfo?: ErrorInfo): TestCaseError | undefined {
    if (!this.options.parseErrors || !errorInfo) {
      return undefined
    }

    const error = errorInfo
    if (
      !Array.isArray(error.Message) ||
      error.Message.length === 0 ||
      !Array.isArray(error.StackTrace) ||
      error.StackTrace.length === 0
    ) {
      return undefined
    }

    const message = errorInfo.Message[0]
    const stackTrace = errorInfo.StackTrace[0]
    let path
    let line

    const src = this.exceptionThrowSource(stackTrace)
    if (src) {
      path = src.path
      line = src.line
    }

    return {
      path,
      line,
      message,
      details: `${message}\n${stackTrace}`
    }
  }

  private getTestClasses(trx: TrxReport): TestClass[] {
    if (trx.TestRun.TestDefinitions === undefined || trx.TestRun.Results === undefined) {
      return []
    }

    const unitTests: {[id: string]: UnitTest} = {}
    for (const td of trx.TestRun.TestDefinitions) {
      for (const ut of td.UnitTest) {
        unitTests[ut.$.id] = ut
      }
    }

    const unitTestsResults = trx.TestRun.Results.flatMap(r => r.UnitTestResult).flatMap(result => ({
      result,
      test: unitTests[result.$.testId]
    }))

    const testClasses: {[name: string]: TestClass} = {}
    for (const r of unitTestsResults) {
      const className = r.test.TestMethod[0].$.className
      let tc = testClasses[className]
      if (tc === undefined) {
        tc = new TestClass(className)
        testClasses[tc.name] = tc
      }
      const error = this.getErrorInfo(r.result)
      const durationAttr = r.result.$.duration
      const duration = durationAttr ? parseNetDuration(durationAttr) : 0

      const resultTestName = r.result.$.testName
      const testName =
        resultTestName.startsWith(className) && resultTestName[className.length] === '.'
          ? resultTestName.substring(className.length + 1)
          : resultTestName

      const test = new Test(testName, r.result.$.outcome, duration, error)
      tc.tests.push(test)
    }

    const result = Object.values(testClasses)
    return result
  }

  private getTestRunResult(path: string, trx: TrxReport, testClasses: TestClass[]): TestRunResult {
    const times = trx.TestRun.Times[0].$
    const totalTime = parseIsoDate(times.finish).getTime() - parseIsoDate(times.start).getTime()

    const suites = testClasses.map(testClass => {
      //const testByTestId = new Map<string, TestCaseResult>();

      const tests = testClass.tests.map(test => {
        const error = this.getError2(test)
        return new TestCaseResult(test.name, test.result, test.duration, error)
      })

      const group = new TestGroupResult(null, tests)
      return new TestSuiteResult(testClass.name, [group])
    })

    return new TestRunResult(path, suites, totalTime)
  }

  private getErrorInfo(testResult: UnitTestResult): ErrorInfo | undefined {
    if (testResult.$.outcome !== 'Failed') {
      return undefined
    }

    const output = testResult.Output
    const error = output?.length > 0 && output[0].ErrorInfo?.length > 0 ? output[0].ErrorInfo[0] : undefined
    return error
  }

  private getError2(test: Test): TestCaseError | undefined {
    if (!this.options.parseErrors || !test.error) {
      return undefined
    }

    const error = test.error
    if (
      !Array.isArray(error.Message) ||
      error.Message.length === 0 ||
      !Array.isArray(error.StackTrace) ||
      error.StackTrace.length === 0
    ) {
      return undefined
    }

    const message = test.error.Message[0]
    const stackTrace = test.error.StackTrace[0]
    let path
    let line

    const src = this.exceptionThrowSource(stackTrace)
    if (src) {
      path = src.path
      line = src.line
    }

    return {
      path,
      line,
      message,
      details: `${message}\n${stackTrace}`
    }
  }

  private exceptionThrowSource(stackTrace: string): {path: string; line: number} | undefined {
    const lines = stackTrace.split(/\r*\n/)
    const re = / in (.+):line (\d+)$/
    const {trackedFiles} = this.options

    for (const str of lines) {
      const match = str.match(re)
      if (match !== null) {
        const [_, fileStr, lineStr] = match
        const filePath = normalizeFilePath(fileStr)
        const workDir = this.getWorkDir(filePath)
        if (workDir) {
          const file = filePath.substr(workDir.length)
          if (trackedFiles.includes(file)) {
            const line = parseInt(lineStr)
            return {path: file, line}
          }
        }
      }
    }
  }

  private getWorkDir(path: string): string | undefined {
    return (
      this.options.workDir ??
      this.assumedWorkDir ??
      (this.assumedWorkDir = getBasePath(path, this.options.trackedFiles))
    )
  }
}
