# V1ManagedFieldsEntry
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | [**String**](string.md) | APIVersion defines the version of this resource that this field set applies to. The format is \&quot;group/version\&quot; just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted. | [optional] [default to null]
**fieldsType** | [**String**](string.md) | FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: \&quot;FieldsV1\&quot; | [optional] [default to null]
**fieldsV1** | [**Object**](.md) |  | [optional] [default to null]
**manager** | [**String**](string.md) | Manager is an identifier of the workflow managing these fields. | [optional] [default to null]
**operation** | [**String**](string.md) | Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are &#39;Apply&#39; and &#39;Update&#39;. | [optional] [default to null]
**time** | [**String**](string.md) | Time is timestamp of when these fields were set. It should always be empty if Operation is &#39;Apply&#39; +optional | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

