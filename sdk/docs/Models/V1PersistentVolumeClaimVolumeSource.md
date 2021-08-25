# V1PersistentVolumeClaimVolumeSource
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claimName** | [**String**](string.md) | ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims | [optional] [default to null]
**readOnly** | [**Boolean**](boolean.md) | Will force the ReadOnly setting in VolumeMounts. Default false. +optional | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

