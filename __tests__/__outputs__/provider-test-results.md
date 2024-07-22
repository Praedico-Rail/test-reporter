![Tests failed](https://img.shields.io/badge/tests-268%20passed%2C%201%20failed-critical)
## 🔴 <a id="user-content-r0" href="#user-content-r0">fixtures/external/flutter/provider-test-results.json</a>
**269** tests were completed in **0ms** with **268** passed, **1** failed and **0** skipped.
|Test suite|Passed|Failed|Skipped|Time|
|:---|---:|---:|---:|---:|
|🟢 [test/builder_test.dart](#user-content-r0s0)|24|||402ms|
|🟢 [test/change_notifier_provider_test.dart](#user-content-r0s1)|10|||306ms|
|🟢 [test/consumer_test.dart](#user-content-r0s2)|18|||340ms|
|🟢 [test/context_test.dart](#user-content-r0s3)|31|||698ms|
|🟢 [test/future_provider_test.dart](#user-content-r0s4)|10|||305ms|
|🟢 [test/inherited_provider_test.dart](#user-content-r0s5)|81|||1s|
|🟢 [test/listenable_provider_test.dart](#user-content-r0s6)|16|||353ms|
|🟢 [test/listenable_proxy_provider_test.dart](#user-content-r0s7)|12|||373ms|
|🟢 [test/multi_provider_test.dart](#user-content-r0s8)|3|||198ms|
|🟢 [test/provider_test.dart](#user-content-r0s9)|11|||306ms|
|🟢 [test/proxy_provider_test.dart](#user-content-r0s10)|16|||438ms|
|🟢 [test/reassemble_test.dart](#user-content-r0s11)|3|||221ms|
|🟢 [test/selector_test.dart](#user-content-r0s12)|17|||364ms|
|🟢 [test/stateful_provider_test.dart](#user-content-r0s13)|4|||254ms|
|🟢 [test/stream_provider_test.dart](#user-content-r0s14)|8|||282ms|
|🔴 [test/value_listenable_provider_test.dart](#user-content-r0s15)|4|1||327ms|
### 🟢 <a id="user-content-r0s0" href="#user-content-r0s0">test/builder_test.dart</a>
```
ChangeNotifierProvider
  🟢 default [189ms]
  🟢 .value [10ms]
```
```
ListenableProvider
  🟢 default [9ms]
  🟢 .value [16ms]
```
```
Provider
  🟢 default [11ms]
  🟢 .value [8ms]
```
```
ProxyProvider
  🟢 0 [11ms]
  🟢 1 [10ms]
  🟢 2 [8ms]
  🟢 3 [10ms]
  🟢 4 [9ms]
  🟢 5 [9ms]
  🟢 6 [9ms]
```
```
MultiProvider
  🟢 with 1 ChangeNotifierProvider default [9ms]
  🟢 with 2 ChangeNotifierProvider default [9ms]
  🟢 with ListenableProvider default [12ms]
  🟢 with Provider default [8ms]
  🟢 with ProxyProvider0 [7ms]
  🟢 with ProxyProvider1 [9ms]
  🟢 with ProxyProvider2 [7ms]
  🟢 with ProxyProvider3 [9ms]
  🟢 with ProxyProvider4 [9ms]
  🟢 with ProxyProvider5 [7ms]
  🟢 with ProxyProvider6 [7ms]
```
### 🟢 <a id="user-content-r0s1" href="#user-content-r0s1">test/change_notifier_provider_test.dart</a>
```
🟢 Use builder property, not child [10ms]
```
```
ChangeNotifierProvider
  🟢 value [185ms]
  🟢 builder [18ms]
  🟢 builder1 [12ms]
  🟢 builder2 [12ms]
  🟢 builder3 [19ms]
  🟢 builder4 [14ms]
  🟢 builder5 [15ms]
  🟢 builder6 [11ms]
  🟢 builder0 [10ms]
```
### 🟢 <a id="user-content-r0s2" href="#user-content-r0s2">test/consumer_test.dart</a>
```
consumer
  🟢 obtains value from Provider<T> [181ms]
  🟢 crashed with no builder [11ms]
  🟢 can be used inside MultiProvider [16ms]
```
```
consumer2
  🟢 obtains value from Provider<T> [22ms]
  🟢 crashed with no builder [8ms]
  🟢 can be used inside MultiProvider [9ms]
```
```
consumer3
  🟢 obtains value from Provider<T> [9ms]
  🟢 crashed with no builder [7ms]
  🟢 can be used inside MultiProvider [8ms]
```
```
consumer4
  🟢 obtains value from Provider<T> [8ms]
  🟢 crashed with no builder [6ms]
  🟢 can be used inside MultiProvider [8ms]
```
```
consumer5
  🟢 obtains value from Provider<T> [8ms]
  🟢 crashed with no builder [6ms]
  🟢 can be used inside MultiProvider [9ms]
```
```
consumer6
  🟢 obtains value from Provider<T> [8ms]
  🟢 crashed with no builder [8ms]
  🟢 can be used inside MultiProvider [8ms]
```
### 🟢 <a id="user-content-r0s3" href="#user-content-r0s3">test/context_test.dart</a>
```
🟢 watch in layoutbuilder [179ms]
🟢 select in layoutbuilder [12ms]
🟢 cannot select in listView [138ms]
🟢 watch in listView [33ms]
🟢 watch in gridView [21ms]
🟢 clears select dependencies for all dependents [19ms]
```
```
BuildContext
  🟢 internal selected value is updated [32ms]
  🟢 create can use read without being lazy [11ms]
  🟢 watch can be used inside InheritedProvider.update [10ms]
  🟢 select doesn't fail if it loads a provider that depends on other providers [9ms]
  🟢 don't call old selectors if the child rebuilds individually [21ms]
  🟢 selects throws inside click handlers [40ms]
  🟢 select throws if try to read dynamic [9ms]
  🟢 select throws ProviderNotFoundException [9ms]
  🟢 select throws if watch called inside the callback from build [6ms]
  🟢 select throws if read called inside the callback from build [9ms]
  🟢 select throws if select called inside the callback from build [8ms]
  🟢 select throws if read called inside the callback on dependency change [10ms]
  🟢 select throws if watch called inside the callback on dependency change [17ms]
  🟢 select throws if select called inside the callback on dependency change [9ms]
  🟢 can call read inside didChangeDependencies [9ms]
  🟢 select cannot be called inside didChangeDependencies [6ms]
  🟢 select in initState throws [6ms]
  🟢 watch in initState throws [10ms]
  🟢 read in initState works [6ms]
  🟢 consumer can be removed and selector stops to be called [7ms]
  🟢 context.select deeply compares maps [15ms]
  🟢 context.select deeply compares lists [8ms]
  🟢 context.select deeply compares iterables [8ms]
  🟢 context.select deeply compares sets [11ms]
  🟢 context.watch listens to value changes [10ms]
```
### 🟢 <a id="user-content-r0s4" href="#user-content-r0s4">test/future_provider_test.dart</a>
```
🟢 works with MultiProvider [184ms]
🟢 (catchError) previous future completes after transition is no-op [16ms]
🟢 previous future completes after transition is no-op [15ms]
🟢 transition from future to future preserve state [12ms]
🟢 throws if future has error and catchError is missing [24ms]
🟢 calls catchError if present and future has error [21ms]
🟢 works with null [14ms]
🟢 create and dispose future with builder [12ms]
🟢 FutureProvider() crashes if builder is null [4ms]
```
```
FutureProvider()
  🟢 crashes if builder is null [3ms]
```
### 🟢 <a id="user-content-r0s5" href="#user-content-r0s5">test/inherited_provider_test.dart</a>
```
🟢 regression test #377 [167ms]
🟢 rebuild on dependency flags update [15ms]
🟢 properly update debug flags if a create triggers another deferred create [9ms]
🟢 properly update debug flags if a create triggers another deferred create [8ms]
🟢 properly update debug flags if an update triggers another create/update [7ms]
🟢 properly update debug flags if a create triggers another create/update [8ms]
🟢 Provider.of(listen: false) outside of build works when it loads a provider [22ms]
🟢 new value is available in didChangeDependencies [26ms]
🟢 builder receives the current value and updates independently from `update` [16ms]
🟢 builder can _not_ rebuild when provider updates [8ms]
🟢 builder rebuilds if provider is recreated [9ms]
🟢 provider.of throws if listen:true outside of the widget tree [23ms]
🟢 InheritedProvider throws if no child is provided with default constructor [14ms]
🟢 InheritedProvider throws if no child is provided with value constructor [8ms]
🟢 DeferredInheritedProvider throws if no child is provided with default constructor [15ms]
🟢 DeferredInheritedProvider throws if no child is provided with value constructor [7ms]
🟢 startListening markNeedsNotifyDependents [7ms]
🟢 InheritedProvider can be subclassed [8ms]
🟢 DeferredInheritedProvider can be subclassed [7ms]
🟢 can be used with MultiProvider [8ms]
🟢 throw if the widget ctor changes [8ms]
🟢 InheritedProvider lazy loading can be disabled [6ms]
🟢 InheritedProvider.value lazy loading can be disabled [9ms]
🟢 InheritedProvider subclass don't have to specify default lazy value [7ms]
🟢 DeferredInheritedProvider lazy loading can be disabled [7ms]
🟢 DeferredInheritedProvider.value lazy loading can be disabled [7ms]
🟢 selector [14ms]
🟢 can select multiple types from same provider [9ms]
🟢 can select same type on two different providers [8ms]
🟢 can select same type twice on same provider [10ms]
🟢 Provider.of has a proper error message if context is null [6ms]
```
```
diagnostics
  🟢 InheritedProvider.value [11ms]
  🟢 InheritedProvider doesn't break lazy loading [7ms]
  🟢 InheritedProvider show if listening [7ms]
  🟢 DeferredInheritedProvider.value [6ms]
  🟢 DeferredInheritedProvider [16ms]
```
```
InheritedProvider.value()
  🟢 markNeedsNotifyDependents during startListening is noop [8ms]
  🟢 startListening called again when create returns new value [27ms]
  🟢 startListening [19ms]
  🟢 stopListening not called twice if rebuild doesn't have listeners [16ms]
  🟢 removeListener cannot be null [22ms]
  🟢 pass down current value [17ms]
  🟢 default updateShouldNotify [8ms]
  🟢 custom updateShouldNotify [32ms]
```
```
InheritedProvider()
  🟢 hasValue [16ms]
  🟢 provider calls update if rebuilding only due to didChangeDependencies [9ms]
  🟢 provider notifying dependents doesn't call update [11ms]
  🟢 update can call Provider.of with listen:true [7ms]
  🟢 update lazy loaded can call Provider.of with listen:true [10ms]
  🟢 markNeedsNotifyDependents during startListening is noop [22ms]
  🟢 update can obtain parent of the same type than self [15ms]
  🟢 _debugCheckInvalidValueType [22ms]
  🟢 startListening [18ms]
  🟢 startListening called again when create returns new value [20ms]
  🟢 stopListening not called twice if rebuild doesn't have listeners [18ms]
  🟢 removeListener cannot be null [16ms]
  🟢 fails if initialValueBuilder calls inheritFromElement/inheritFromWiggetOfExactType [17ms]
  🟢 builder is called on every rebuild and after a dependency change [11ms]
  🟢 builder with no updateShouldNotify use == [8ms]
  🟢 builder calls updateShouldNotify callback [8ms]
  🟢 initialValue is transmitted to valueBuilder [8ms]
  🟢 calls builder again if dependencies change [22ms]
  🟢 exposes initialValue if valueBuilder is null [20ms]
  🟢 call dispose on unmount [22ms]
  🟢 builder unmount, dispose not called if value never read [11ms]
  🟢 call dispose after new value [9ms]
  🟢 valueBuilder works without initialBuilder [11ms]
  🟢 calls initialValueBuilder lazily once [7ms]
  🟢 throws if both builder and initialBuilder are missing [5ms]
```
```
DeferredInheritedProvider.value()
  🟢 hasValue [6ms]
  🟢 startListening [9ms]
  🟢 stopListening cannot be null [9ms]
  🟢 startListening doesn't need setState if already initialized [8ms]
  🟢 setState without updateShouldNotify [8ms]
  🟢 setState with updateShouldNotify [9ms]
  🟢 startListening never leave the widget uninitialized [8ms]
  🟢 startListening called again on controller change [10ms]
```
```
DeferredInheritedProvider()
  🟢 create can't call inherited widgets [7ms]
  🟢 creates the value lazily [7ms]
  🟢 dispose [7ms]
  🟢 dispose no-op if never built [7ms]
```
### 🟢 <a id="user-content-r0s6" href="#user-content-r0s6">test/listenable_provider_test.dart</a>
```
ListenableProvider
  🟢 works with MultiProvider [173ms]
  🟢 asserts that the created notifier can have listeners [12ms]
  🟢 don't listen again if listenable instance doesn't change [12ms]
  🟢 works with null (default) [7ms]
  🟢 works with null (create) [7ms]
  🟢 stateful create called once [11ms]
  🟢 dispose called on unmount [13ms]
  🟢 dispose can be null [8ms]
  🟢 changing listenable rebuilds descendants [12ms]
  🟢 rebuilding with the same provider don't rebuilds descendants [11ms]
  🟢 notifylistener rebuilds descendants [9ms]
```
```
ListenableProvider value constructor
  🟢 pass down key [17ms]
  🟢 changing the Listenable instance rebuilds dependents [29ms]
```
```
ListenableProvider stateful constructor
  🟢 called with context [8ms]
  🟢 pass down key [20ms]
  🟢 throws if create is null [4ms]
```
### 🟢 <a id="user-content-r0s7" href="#user-content-r0s7">test/listenable_proxy_provider_test.dart</a>
```
ListenableProxyProvider
  🟢 throws if update is missing [43ms]
  🟢 asserts that the created notifier has no listener [177ms]
  🟢 asserts that the created notifier has no listener after rebuild [18ms]
  🟢 rebuilds dependendents when listeners are called [20ms]
  🟢 update returning a new Listenable disposes the previously created value and update dependents [25ms]
  🟢 disposes of created value [13ms]
```
```
ListenableProxyProvider variants
  🟢 ListenableProxyProvider [13ms]
  🟢 ListenableProxyProvider2 [9ms]
  🟢 ListenableProxyProvider3 [9ms]
  🟢 ListenableProxyProvider4 [17ms]
  🟢 ListenableProxyProvider5 [12ms]
  🟢 ListenableProxyProvider6 [17ms]
```
### 🟢 <a id="user-content-r0s8" href="#user-content-r0s8">test/multi_provider_test.dart</a>
```
MultiProvider
  🟢 throw if providers is null [30ms]
  🟢 MultiProvider children can only access parent providers [160ms]
  🟢 MultiProvider.providers with ignored child [8ms]
```
### 🟢 <a id="user-content-r0s9" href="#user-content-r0s9">test/provider_test.dart</a>
```
🟢 works with MultiProvider [172ms]
```
```
Provider.of
  🟢 throws if T is dynamic [26ms]
  🟢 listen defaults to true when building widgets [13ms]
  🟢 listen defaults to false outside of the widget tree [9ms]
  🟢 listen:false doesn't trigger rebuild [10ms]
  🟢 listen:true outside of the widget tree throws [11ms]
```
```
Provider
  🟢 throws if the provided value is a Listenable/Stream [28ms]
  🟢 debugCheckInvalidValueType can be disabled [9ms]
  🟢 simple usage [9ms]
  🟢 throws an error if no provider found [11ms]
  🟢 update should notify [8ms]
```
### 🟢 <a id="user-content-r0s10" href="#user-content-r0s10">test/proxy_provider_test.dart</a>
```
ProxyProvider
  🟢 throws if the provided value is a Listenable/Stream [209ms]
  🟢 debugCheckInvalidValueType can be disabled [13ms]
  🟢 create creates initial value [23ms]
  🟢 consume another providers [18ms]
  🟢 rebuild descendants if value change [13ms]
  🟢 call dispose when unmounted with the latest result [11ms]
  🟢 don't rebuild descendants if value doesn't change [12ms]
  🟢 pass down updateShouldNotify [19ms]
  🟢 works with MultiProvider [16ms]
  🟢 update callback can trigger descendants setState synchronously [24ms]
  🟢 throws if update is null [7ms]
```
```
ProxyProvider variants
  🟢 ProxyProvider2 [18ms]
  🟢 ProxyProvider3 [16ms]
  🟢 ProxyProvider4 [9ms]
  🟢 ProxyProvider5 [20ms]
  🟢 ProxyProvider6 [10ms]
```
### 🟢 <a id="user-content-r0s11" href="#user-content-r0s11">test/reassemble_test.dart</a>
```
🟢 ReassembleHandler [194ms]
🟢 unevaluated create [11ms]
🟢 unevaluated create [16ms]
```
### 🟢 <a id="user-content-r0s12" href="#user-content-r0s12">test/selector_test.dart</a>
```
🟢 asserts that builder/selector are not null [32ms]
🟢 Deep compare maps by default [158ms]
🟢 Deep compare iterables by default [9ms]
🟢 Deep compare sets by default [12ms]
🟢 Deep compare lists by default [14ms]
🟢 custom shouldRebuid [11ms]
🟢 passes `child` and `key` [13ms]
🟢 calls builder if the callback changes [14ms]
🟢 works with MultiProvider [12ms]
🟢 don't call builder again if it rebuilds but selector returns the same thing [9ms]
🟢 call builder again if it rebuilds abd selector returns the a different variable [9ms]
🟢 Selector [15ms]
🟢 Selector2 [9ms]
🟢 Selector3 [8ms]
🟢 Selector4 [9ms]
🟢 Selector5 [19ms]
🟢 Selector6 [11ms]
```
### 🟢 <a id="user-content-r0s13" href="#user-content-r0s13">test/stateful_provider_test.dart</a>
```
🟢 asserts [6ms]
🟢 works with MultiProvider [203ms]
🟢 calls create only once [27ms]
🟢 dispose [18ms]
```
### 🟢 <a id="user-content-r0s14" href="#user-content-r0s14">test/stream_provider_test.dart</a>
```
🟢 works with MultiProvider [191ms]
🟢 transition from stream to stream preserve state [16ms]
🟢 throws if stream has error and catchError is missing [22ms]
🟢 calls catchError if present and stream has error [20ms]
🟢 works with null [13ms]
🟢 StreamProvider() crashes if builder is null [5ms]
```
```
StreamProvider()
  🟢 create and dispose stream with builder [11ms]
  🟢 crashes if builder is null [4ms]
```
### 🔴 <a id="user-content-r0s15" href="#user-content-r0s15">test/value_listenable_provider_test.dart</a>
```
valueListenableProvider
  🟢 rebuilds when value change [200ms]
  🟢 don't rebuild dependents by default [26ms]
  🟢 pass keys [10ms]
  🟢 don't listen again if stream instance doesn't change [22ms]
  🔴 pass updateShouldNotify [69ms]
	The following TestFailure object was thrown running a test:
	  Expected: <2>
	  Actual: <1>
	Unexpected number of calls
	
```