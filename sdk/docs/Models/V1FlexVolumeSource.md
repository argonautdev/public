# V1FlexVolumeSource
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**driver** | [**String**](string.md) | Driver is the name of the driver to use for this volume. | [optional] [default to null]
**fsType** | [**String**](string.md) | Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. The default filesystem depends on FlexVolume script. +optional | [optional] [default to null]
**options** | [**Map**](string.md) | Optional: Extra command options if any. +optional | [optional] [default to null]
**readOnly** | [**Boolean**](boolean.md) | Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. +optional | [optional] [default to null]
**secretRef** | [**v1.LocalObjectReference**](v1.LocalObjectReference.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

