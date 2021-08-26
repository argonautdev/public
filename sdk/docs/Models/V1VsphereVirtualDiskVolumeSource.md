# V1VsphereVirtualDiskVolumeSource
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fsType** | [**String**](string.md) | Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. Implicitly inferred to be \&quot;ext4\&quot; if unspecified. +optional | [optional] [default to null]
**storagePolicyID** | [**String**](string.md) | Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName. +optional | [optional] [default to null]
**storagePolicyName** | [**String**](string.md) | Storage Policy Based Management (SPBM) profile name. +optional | [optional] [default to null]
**volumePath** | [**String**](string.md) | Path that identifies vSphere volume vmdk | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

