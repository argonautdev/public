# V1AzureDiskVolumeSource
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cachingMode** | [**String**](string.md) | Host Caching mode: None, Read Only, Read Write. +optional | [optional] [default to null]
**diskName** | [**String**](string.md) | The Name of the data disk in the blob storage | [optional] [default to null]
**diskURI** | [**String**](string.md) | The URI the data disk in the blob storage | [optional] [default to null]
**fsType** | [**String**](string.md) | Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. Implicitly inferred to be \&quot;ext4\&quot; if unspecified. +optional | [optional] [default to null]
**kind** | [**String**](string.md) | Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared | [optional] [default to null]
**readOnly** | [**Boolean**](boolean.md) | Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. +optional | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

