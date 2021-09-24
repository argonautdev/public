# V1PersistentVolumeClaimSpec
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessModes** | [**List**](string.md) | AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1 +optional | [optional] [default to null]
**dataSource** | [**v1.TypedLocalObjectReference**](v1.TypedLocalObjectReference.md) |  | [optional] [default to null]
**dataSourceRef** | [**v1.TypedLocalObjectReference**](v1.TypedLocalObjectReference.md) |  | [optional] [default to null]
**resources** | [**v1.ResourceRequirements**](v1.ResourceRequirements.md) |  | [optional] [default to null]
**selector** | [**v1.LabelSelector**](v1.LabelSelector.md) |  | [optional] [default to null]
**storageClassName** | [**String**](string.md) | Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1 +optional | [optional] [default to null]
**volumeMode** | [**String**](string.md) | volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec. +optional | [optional] [default to null]
**volumeName** | [**String**](string.md) | VolumeName is the binding reference to the PersistentVolume backing this claim. +optional | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

