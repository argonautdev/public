# ReleaseHook
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete\_policies** | [**List**](string.md) | DeletePolicies are the policies that indicate when to delete the hook | [optional] [default to null]
**events** | [**List**](string.md) | Events are the events that this hook fires on. | [optional] [default to null]
**kind** | [**String**](string.md) | Kind is the Kubernetes kind. | [optional] [default to null]
**last\_run** | [**release.HookExecution**](release.HookExecution.md) |  | [optional] [default to null]
**manifest** | [**String**](string.md) | Manifest is the manifest contents. | [optional] [default to null]
**name** | [**String**](string.md) |  | [optional] [default to null]
**path** | [**String**](string.md) | Path is the chart-relative path to the template. | [optional] [default to null]
**weight** | [**Integer**](integer.md) | Weight indicates the sort order for execution among similar Hook type | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

