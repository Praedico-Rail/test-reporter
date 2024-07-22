![Tests passed successfully](https://img.shields.io/badge/tests-67%20passed%2C%2012%20skipped-success)
## 🟢 <a id="user-content-r0" href="#user-content-r0">fixtures/external/SilentNotes.trx</a>
**79** tests were completed in **446ms** with **67** passed, **0** failed and **12** skipped.
|Test suite|Passed|Failed|Skipped|Time|
|:---|---:|---:|---:|---:|
|🟢 [VanillaCloudStorageClientTest.CloudStorageCredentialsTest](#user-content-r0s0)|6|||30ms|
|🟢 [VanillaCloudStorageClientTest.CloudStorageProviders.DropboxCloudStorageClientTest](#user-content-r0s1)|2||3|101ms|
|🟢 [VanillaCloudStorageClientTest.CloudStorageProviders.FtpCloudStorageClientTest](#user-content-r0s2)|4||3|166ms|
|🟢 [VanillaCloudStorageClientTest.CloudStorageProviders.GmxCloudStorageClientTest](#user-content-r0s3)|2|||7ms|
|🟢 [VanillaCloudStorageClientTest.CloudStorageProviders.GoogleCloudStorageClientTest](#user-content-r0s4)|1||3|40ms|
|🟢 [VanillaCloudStorageClientTest.CloudStorageProviders.OnedriveCloudStorageClientTest](#user-content-r0s5)|1||3|15ms|
|🟢 [VanillaCloudStorageClientTest.CloudStorageProviders.WebdavCloudStorageClientTest](#user-content-r0s6)|5|||16ms|
|🟢 [VanillaCloudStorageClientTest.CloudStorageTokenTest](#user-content-r0s7)|9|||0ms|
|🟢 [VanillaCloudStorageClientTest.OAuth2.AuthorizationResponseErrorTest](#user-content-r0s8)|3|||3ms|
|🟢 [VanillaCloudStorageClientTest.OAuth2.OAuth2UtilsTest](#user-content-r0s9)|9|||12ms|
|🟢 [VanillaCloudStorageClientTest.OAuth2CloudStorageClientTest](#user-content-r0s10)|5|||13ms|
|🟢 [VanillaCloudStorageClientTest.SecureStringExtensionsTest](#user-content-r0s11)|7|||0ms|
|🟢 [VanillaCloudStorageClientTest.SerializeableCloudStorageCredentialsTest](#user-content-r0s12)|13|||43ms|
### 🟢 <a id="user-content-r0s0" href="#user-content-r0s0">VanillaCloudStorageClientTest.CloudStorageCredentialsTest</a>
```
🟢 CorrectlyConvertsStringToSecureString [6ms]
🟢 AreEqualWorksWithSameContent [1ms]
🟢 AreEqualWorksWithDifferentPassword [7ms]
🟢 ValidateRejectsInvalidCredentials [6ms]
🟢 CorrectlyConvertsSecureStringToString [7ms]
🟢 ValidateAcceptsValidCredentials [3ms]
```
### 🟢 <a id="user-content-r0s1" href="#user-content-r0s1">VanillaCloudStorageClientTest.CloudStorageProviders.DropboxCloudStorageClientTest</a>
```
⚪ ReallyDoRefreshToken [0ms]
🟢 ThrowsAccessDeniedExceptionWithInvalidToken [6ms]
⚪ ReallyDoFetchToken [0ms]
⚪ ReallyDoOpenAuthorizationPageInBrowser [0ms]
🟢 FileLifecycleWorks [95ms]
```
### 🟢 <a id="user-content-r0s2" href="#user-content-r0s2">VanillaCloudStorageClientTest.CloudStorageProviders.FtpCloudStorageClientTest</a>
```
🟢 FileLifecycleWorks [161ms]
⚪ ThrowsWithInvalidUrl [0ms]
🟢 SecureSslConnectionWorks [1ms]
⚪ ThrowsWithInvalidUsername [0ms]
🟢 ThrowsWithHttpInsteadOfFtp [4ms]
⚪ ThrowsWithInvalidPassword [0ms]
🟢 SanitizeCredentials_ChangesInvalidPrefix [0ms]
```
### 🟢 <a id="user-content-r0s3" href="#user-content-r0s3">VanillaCloudStorageClientTest.CloudStorageProviders.GmxCloudStorageClientTest</a>
```
🟢 ChoosesCorrectUrlForGmxNetEmail [1ms]
🟢 ChoosesCorrectUrlForGmxComEmail [6ms]
```
### 🟢 <a id="user-content-r0s4" href="#user-content-r0s4">VanillaCloudStorageClientTest.CloudStorageProviders.GoogleCloudStorageClientTest</a>
```
⚪ ReallyDoOpenAuthorizationPageInBrowser [0ms]
⚪ ReallyDoFetchToken [0ms]
⚪ ReallyDoRefreshToken [0ms]
🟢 FileLifecycleWorks [40ms]
```
### 🟢 <a id="user-content-r0s5" href="#user-content-r0s5">VanillaCloudStorageClientTest.CloudStorageProviders.OnedriveCloudStorageClientTest</a>
```
⚪ ReallyDoFetchToken [0ms]
🟢 FileLifecycleWorks [15ms]
⚪ ReallyDoRefreshToken [0ms]
⚪ ReallyDoOpenAuthorizationPageInBrowser [0ms]
```
### 🟢 <a id="user-content-r0s6" href="#user-content-r0s6">VanillaCloudStorageClientTest.CloudStorageProviders.WebdavCloudStorageClientTest</a>
```
🟢 ParseGmxWebdavResponseCorrectly [1ms]
🟢 FileLifecycleWorks [14ms]
🟢 ThrowsWithInvalidUsername [0ms]
🟢 ThrowsWithInvalidPath [1ms]
🟢 ParseStratoWebdavResponseCorrectly [0ms]
```
### 🟢 <a id="user-content-r0s7" href="#user-content-r0s7">VanillaCloudStorageClientTest.CloudStorageTokenTest</a>
```
🟢 SetExpiryDateBySecondsWorks [0ms]
🟢 AreEqualWorksWithSameContent [0ms]
🟢 NeedsRefreshReturnsTrueIfExpired [0ms]
🟢 SetExpiryDateBySecondsWorksWithVeryShortPeriod [0ms]
🟢 SetExpiryDateBySecondsWorksWithNull [0ms]
🟢 AreEqualWorksWithNullDate [0ms]
🟢 NeedsRefreshReturnsTrueIfNoExpirationDate [0ms]
🟢 NeedsRefreshReturnsFalseForTokenFlow [0ms]
🟢 NeedsRefreshReturnsFalseIfNotExpired [0ms]
```
### 🟢 <a id="user-content-r0s8" href="#user-content-r0s8">VanillaCloudStorageClientTest.OAuth2.AuthorizationResponseErrorTest</a>
```
🟢 ParsesAllErrorCodesCorrectly [3ms]
🟢 ParsesUnknownErrorCodeCorrectly [0ms]
🟢 ParsesNullErrorCodeCorrectly [0ms]
```
### 🟢 <a id="user-content-r0s9" href="#user-content-r0s9">VanillaCloudStorageClientTest.OAuth2.OAuth2UtilsTest</a>
```
🟢 ParseRealWorldGoogleSuccessResponse [0ms]
🟢 BuildAuthorizationRequestUrlUsesCodeVerifier [1ms]
🟢 BuildAuthorizationRequestUrlLeavesOutOptionalParameters [0ms]
🟢 BuildAuthorizationRequestUrlUsesAllParameters [0ms]
🟢 BuildAuthorizationRequestUrlEscapesParameters [2ms]
🟢 BuildAuthorizationRequestUrlThrowsWithMissingRedirectUrlForTokenFlow [0ms]
🟢 ParseRealWorldDropboxRejectResponse [9ms]
🟢 ParseRealWorldDropboxSuccessResponse [0ms]
🟢 ParseRealWorldGoogleRejectResponse [0ms]
```
### 🟢 <a id="user-content-r0s10" href="#user-content-r0s10">VanillaCloudStorageClientTest.OAuth2CloudStorageClientTest</a>
```
🟢 BuildOAuth2AuthorizationRequestUrlWorks [1ms]
🟢 FetchTokenThrowsWithWrongState [1ms]
🟢 FetchTokenCanInterpretGoogleResponse [7ms]
🟢 RefreshTokenCanInterpretGoogleResponse [3ms]
🟢 FetchTokenReturnsNullForDeniedAccess [1ms]
```
### 🟢 <a id="user-content-r0s11" href="#user-content-r0s11">VanillaCloudStorageClientTest.SecureStringExtensionsTest</a>
```
🟢 CorrectlyConvertsUnicodeBytesToSecureString [0ms]
🟢 AreEqualsWorksCorrectly [0ms]
🟢 CorrectlyConvertsUtf8BytesToSecureString [0ms]
🟢 CorrectlyConvertsStringToSecureString [0ms]
🟢 CorrectlyConvertsSecureStringToUnicodeBytes [0ms]
🟢 CorrectlyConvertsSecureStringToString [0ms]
🟢 CorrectlyConvertsSecureStringToUtf8Bytes [0ms]
```
### 🟢 <a id="user-content-r0s12" href="#user-content-r0s12">VanillaCloudStorageClientTest.SerializeableCloudStorageCredentialsTest</a>
```
🟢 SerializedJsonDoesNotContainNullProperties [0ms]
🟢 SerializedXmlDoesNotContainNullProperties [0ms]
🟢 SerializedDatacontractCanBeReadBack [16ms]
🟢 SerializedDatacontractDoesNotContainPlaintextData [2ms]
🟢 EncryptBeforeSerializationProtectsAllNecessaryProperties [0ms]
🟢 SerializedJsonCanBeReadBack [7ms]
🟢 SerializedXmlDoesNotContainPlaintextData [0ms]
🟢 DecryptAfterDesrializationCanReadAllPropertiesBack [2ms]
🟢 EncryptBeforeSerializationRespectsNullProperties [0ms]
🟢 SerializedJsonDoesNotContainPlaintextData [0ms]
🟢 SerializedDatacontractDoesNotContainNullProperties [0ms]
🟢 DecryptAfterDesrializationRespectsNullProperties [0ms]
🟢 SerializedXmlCanBeReadBack [16ms]
```