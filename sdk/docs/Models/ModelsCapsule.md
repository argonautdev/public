# ModelsCapsule
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | [**String**](string.md) |  | [optional] [default to null]
**DeletedAt** | [**gorm.DeletedAt**](gorm.DeletedAt.md) |  | [optional] [default to null]
**ID** | [**Integer**](integer.md) |  | [optional] [default to null]
**Suffix** | [**String**](string.md) | A random 6-byte suffix to ensure workspace/stream ids are unique | [optional] [default to null]
**UpdatedAt** | [**String**](string.md) |  | [optional] [default to null]
**capsule\_id** | [**Integer**](integer.md) |  | [optional] [default to null]
**kind** | [**String**](string.md) | The type of capsule that was provisioned this could be a capsule or app capsule | [optional] [default to null]
**last\_applied\_at** | [**String**](string.md) | The date of last applied | [optional] [default to null]
**last\_applied\_config** | [**String**](string.md) | The last-applied config file | [optional] [default to null]
**organization\_id** | [**Integer**](integer.md) | The Organization that this capsule belongs to | [optional] [default to null]
**status** | [**String**](string.md) | Status is the status of the capsule | [optional] [default to null]
**uid** | [**String**](string.md) | id only allows you to have uuid field, use uid field, with a unique constraint | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

