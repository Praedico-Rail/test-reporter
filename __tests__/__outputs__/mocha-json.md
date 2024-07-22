![Tests failed](https://img.shields.io/badge/tests-1%20passed%2C%204%20failed%2C%201%20skipped-critical)
## 🔴 <a id="user-content-r0" href="#user-content-r0">fixtures/mocha-json.json</a>
**6** tests were completed in **12ms** with **1** passed, **4** failed and **1** skipped.
|Test suite|Passed|Failed|Skipped|Time|
|:---|---:|---:|---:|---:|
|🔴 [test/main.test.js](#user-content-r0s0)|1|3||1ms|
|🔴 [test/second.test.js](#user-content-r0s1)||1|1|8ms|
### 🔴 <a id="user-content-r0s0" href="#user-content-r0s0">test/main.test.js</a>
```
Test 1
  🟢 Passing test [0ms]
```
```
Test 1 Test 1.1
  🔴 Exception in target unit [0ms]
	Some error
  🔴 Failing test [1ms]
	Expected values to be strictly equal:
	
	false !== true
	
```
```
Test 2
  🔴 Exception in test [0ms]
	Some error
```
### 🔴 <a id="user-content-r0s1" href="#user-content-r0s1">test/second.test.js</a>
```
⚪ Skipped test [0ms]
🔴 Timeout test [8ms]
	Timeout of 1ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. (C:\Users\Michal\Workspace\dorny\test-reporter\reports\mocha\test\second.test.js)
```