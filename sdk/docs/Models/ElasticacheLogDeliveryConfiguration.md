# ElasticacheLogDeliveryConfiguration
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DestinationDetails** | [**elasticache.DestinationDetails**](elasticache.DestinationDetails.md) |  | [optional] [default to null]
**DestinationType** | [**String**](string.md) | Returns the destination type, either cloudwatch-logs or kinesis-firehose. | [optional] [default to null]
**LogFormat** | [**String**](string.md) | Returns the log format, either JSON or TEXT. | [optional] [default to null]
**LogType** | [**String**](string.md) | Refers to slow-log (https://redis.io/commands/slowlog). | [optional] [default to null]
**Message** | [**String**](string.md) | Returns an error message for the log delivery configuration. | [optional] [default to null]
**Status** | [**String**](string.md) | Returns the log delivery configuration status. Values are one of enabling | disabling | modifying | active | error | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

