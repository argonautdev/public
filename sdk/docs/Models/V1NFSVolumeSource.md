# V1NFSVolumeSource
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | [**String**](string.md) | Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs | [optional] [default to null]
**readOnly** | [**Boolean**](boolean.md) | ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs +optional | [optional] [default to null]
**server** | [**String**](string.md) | Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

