# V1OwnerReference
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | [**String**](string.md) | API version of the referent. | [optional] [default to null]
**blockOwnerDeletion** | [**Boolean**](boolean.md) | If true, AND if the owner has the \&quot;foregroundDeletion\&quot; finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs \&quot;delete\&quot; permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. +optional | [optional] [default to null]
**controller** | [**Boolean**](boolean.md) | If true, this reference points to the managing controller. +optional | [optional] [default to null]
**kind** | [**String**](string.md) | Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds | [optional] [default to null]
**name** | [**String**](string.md) | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names | [optional] [default to null]
**uid** | [**String**](string.md) | UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

