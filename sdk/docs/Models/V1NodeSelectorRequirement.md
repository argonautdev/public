# V1NodeSelectorRequirement
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | [**String**](string.md) | The label key that the selector applies to. | [optional] [default to null]
**operator** | [**String**](string.md) | Represents a key&#39;s relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. | [optional] [default to null]
**values** | [**List**](string.md) | An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. +optional | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

