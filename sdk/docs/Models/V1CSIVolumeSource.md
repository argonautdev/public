# V1CSIVolumeSource
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**driver** | [**String**](string.md) | Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster. | [optional] [default to null]
**fsType** | [**String**](string.md) | Filesystem type to mount. Ex. \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply. +optional | [optional] [default to null]
**nodePublishSecretRef** | [**v1.LocalObjectReference**](v1.LocalObjectReference.md) |  | [optional] [default to null]
**readOnly** | [**Boolean**](boolean.md) | Specifies a read-only configuration for the volume. Defaults to false (read/write). +optional | [optional] [default to null]
**volumeAttributes** | [**Map**](string.md) | VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver&#39;s documentation for supported values. +optional | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

