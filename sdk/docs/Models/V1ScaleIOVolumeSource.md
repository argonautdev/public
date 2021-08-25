# V1ScaleIOVolumeSource
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fsType** | [**String**](string.md) | Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. Default is \&quot;xfs\&quot;. +optional | [optional] [default to null]
**gateway** | [**String**](string.md) | The host address of the ScaleIO API Gateway. | [optional] [default to null]
**protectionDomain** | [**String**](string.md) | The name of the ScaleIO Protection Domain for the configured storage. +optional | [optional] [default to null]
**readOnly** | [**Boolean**](boolean.md) | Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. +optional | [optional] [default to null]
**secretRef** | [**v1.LocalObjectReference**](v1.LocalObjectReference.md) |  | [optional] [default to null]
**sslEnabled** | [**Boolean**](boolean.md) | Flag to enable/disable SSL communication with Gateway, default false +optional | [optional] [default to null]
**storageMode** | [**String**](string.md) | Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned. +optional | [optional] [default to null]
**storagePool** | [**String**](string.md) | The ScaleIO Storage Pool associated with the protection domain. +optional | [optional] [default to null]
**system** | [**String**](string.md) | The name of the storage system as configured in ScaleIO. | [optional] [default to null]
**volumeName** | [**String**](string.md) | The name of a volume already created in the ScaleIO system that is associated with this volume source. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

