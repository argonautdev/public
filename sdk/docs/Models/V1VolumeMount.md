# V1VolumeMount
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mountPath** | [**String**](string.md) | Path within the container at which the volume should be mounted.  Must not contain &#39;:&#39;. | [optional] [default to null]
**mountPropagation** | [**String**](string.md) | mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. +optional | [optional] [default to null]
**name** | [**String**](string.md) | This must match the Name of a Volume. | [optional] [default to null]
**readOnly** | [**Boolean**](boolean.md) | Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. +optional | [optional] [default to null]
**subPath** | [**String**](string.md) | Path within the volume from which the container&#39;s volume should be mounted. Defaults to \&quot;\&quot; (volume&#39;s root). +optional | [optional] [default to null]
**subPathExpr** | [**String**](string.md) | Expanded path within the volume from which the container&#39;s volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container&#39;s environment. Defaults to \&quot;\&quot; (volume&#39;s root). SubPathExpr and SubPath are mutually exclusive. +optional | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

