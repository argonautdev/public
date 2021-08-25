# RdsDBInstanceStatusInfo
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**String**](string.md) | Details of the error if there is an error for the instance. If the instance isn&#39;t in an error state, this value is blank. | [optional] [default to null]
**Normal** | [**Boolean**](boolean.md) | Boolean value that is true if the instance is operating normally, or false if the instance is in an error state. | [optional] [default to null]
**Status** | [**String**](string.md) | Status of the DB instance. For a StatusType of read replica, the values can be replicating, replication stop point set, replication stop point reached, error, stopped, or terminated. | [optional] [default to null]
**StatusType** | [**String**](string.md) | This value is currently \&quot;read replication.\&quot; | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

