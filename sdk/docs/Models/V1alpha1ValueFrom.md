# V1alpha1ValueFrom
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configMapKeyRef** | [**v1.ConfigMapKeySelector**](v1.ConfigMapKeySelector.md) |  | [optional] [default to null]
**default** | [**String**](string.md) | Default specifies a value to be used if retrieving the value from the specified source fails | [optional] [default to null]
**event** | [**String**](string.md) | Selector (https://github.com/antonmedv/expr) that is evaluated against the event to get the value of the parameter. E.g. &#x60;payload.message&#x60; | [optional] [default to null]
**expression** | [**String**](string.md) | Expression, if defined, is evaluated to specify the value for the parameter | [optional] [default to null]
**jqFilter** | [**String**](string.md) | JQFilter expression against the resource object in resource templates | [optional] [default to null]
**jsonPath** | [**String**](string.md) | JSONPath of a resource to retrieve an output parameter value from in resource templates | [optional] [default to null]
**parameter** | [**String**](string.md) | Parameter reference to a step or dag task in which to retrieve an output parameter value from (e.g. &#39;{{steps.mystep.outputs.myparam}}&#39;) | [optional] [default to null]
**path** | [**String**](string.md) | Path in the container to retrieve an output parameter value from in container templates | [optional] [default to null]
**supplied** | [**Object**](.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

