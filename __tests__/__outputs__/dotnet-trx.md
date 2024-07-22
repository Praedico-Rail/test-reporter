![Tests failed](https://img.shields.io/badge/tests-5%20passed%2C%205%20failed%2C%201%20skipped-critical)
## 🔴 <a id="user-content-r0" href="#user-content-r0">fixtures/dotnet-trx.trx</a>
**11** tests were completed in **118ms** with **5** passed, **5** failed and **1** skipped.
|Test suite|Passed|Failed|Skipped|Time|
|:---|---:|---:|---:|---:|
|🔴 [DotnetTests.XUnitTests.CalculatorTests](#user-content-r0s0)|5|5|1|118ms|
### 🔴 <a id="user-content-r0s0" href="#user-content-r0s0">DotnetTests.XUnitTests.CalculatorTests</a>
```
🔴 DotnetTests.XUnitTests.CalculatorTests.Exception_In_TargetTest [1ms]
	System.DivideByZeroException : Attempted to divide by zero.
🔴 Should be even number(i: 3) [1ms]
	Assert.True() Failure
	Expected: True
	Actual:   False
🔴 DotnetTests.XUnitTests.CalculatorTests.Failing_Test [4ms]
	Assert.Equal() Failure
	Expected: 3
	Actual:   2
🔴 DotnetTests.XUnitTests.CalculatorTests.Exception_In_Test [3ms]
	System.Exception : Test
⚪ DotnetTests.XUnitTests.CalculatorTests.Skipped_Test [1ms]
🟢 DotnetTests.XUnitTests.CalculatorTests.Passing_Test [0ms]
🟢 DotnetTests.XUnitTests.CalculatorTests.Is_Even_Number(i: 2) [0ms]
🟢 Custom Name [0ms]
🟢 Should be even number(i: 2) [0ms]
🟢 DotnetTests.XUnitTests.CalculatorTests.Timeout_Test [108ms]
🔴 DotnetTests.XUnitTests.CalculatorTests.Is_Even_Number(i: 3) [0ms]
	Assert.True() Failure
	Expected: True
	Actual:   False
```