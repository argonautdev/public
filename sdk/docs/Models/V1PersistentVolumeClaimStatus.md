# V1PersistentVolumeClaimStatus
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessModes** | [**List**](string.md) | AccessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1 +optional | [optional] [default to null]
**capacity** | [**Map**](resource.Quantity.md) |  | [optional] [default to null]
**conditions** | [**List**](v1.PersistentVolumeClaimCondition.md) | Current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to &#39;ResizeStarted&#39;. +optional +patchMergeKey&#x3D;type +patchStrategy&#x3D;merge | [optional] [default to null]
**phase** | [**String**](string.md) | Phase represents the current phase of PersistentVolumeClaim. +optional | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

