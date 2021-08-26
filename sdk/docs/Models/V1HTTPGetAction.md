# V1HTTPGetAction
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | [**String**](string.md) | Host name to connect to, defaults to the pod IP. You probably want to set \&quot;Host\&quot; in httpHeaders instead. +optional | [optional] [default to null]
**httpHeaders** | [**List**](v1.HTTPHeader.md) | Custom headers to set in the request. HTTP allows repeated headers. +optional | [optional] [default to null]
**path** | [**String**](string.md) | Path to access on the HTTP server. +optional | [optional] [default to null]
**port** | [**intstr.IntOrString**](intstr.IntOrString.md) |  | [optional] [default to null]
**scheme** | [**String**](string.md) | Scheme to use for connecting to the host. Defaults to HTTP. +optional | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

