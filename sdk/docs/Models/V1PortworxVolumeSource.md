# V1PortworxVolumeSource
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fsType** | [**String**](string.md) | FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. \&quot;ext4\&quot;, \&quot;xfs\&quot;. Implicitly inferred to be \&quot;ext4\&quot; if unspecified. | [optional] [default to null]
**readOnly** | [**Boolean**](boolean.md) | Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. +optional | [optional] [default to null]
**volumeID** | [**String**](string.md) | VolumeID uniquely identifies a Portworx volume | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

