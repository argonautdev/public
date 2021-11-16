# V1alpha1Parameter
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | [**String**](string.md) | Default is the default value to use for an input parameter if a value was not supplied | [optional] [default to null]
**enum** | [**List**](string.md) | Enum holds a list of string values to choose from, for the actual value of the parameter | [optional] [default to null]
**globalName** | [**String**](string.md) | GlobalName exports an output parameter to the global scope, making it available as &#39;{{workflow.outputs.parameters.XXXX}} and in workflow.status.outputs.parameters | [optional] [default to null]
**name** | [**String**](string.md) | Name is the parameter name | [optional] [default to null]
**value** | [**String**](string.md) | Value is the literal value to use for the parameter. If specified in the context of an input parameter, the value takes precedence over any passed values | [optional] [default to null]
**valueFrom** | [**v1alpha1.ValueFrom**](v1alpha1.ValueFrom.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

