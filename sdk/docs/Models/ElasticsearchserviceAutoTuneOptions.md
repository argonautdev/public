# ElasticsearchserviceAutoTuneOptions
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DesiredState** | [**String**](string.md) | Specifies the Auto-Tune desired state. Valid values are ENABLED, DISABLED. | [optional] [default to null]
**MaintenanceSchedules** | [**List**](elasticsearchservice.AutoTuneMaintenanceSchedule.md) | Specifies list of maitenance schedules. See the Developer Guide (https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html) for more information. | [optional] [default to null]
**RollbackOnDisable** | [**String**](string.md) | Specifies the rollback state while disabling Auto-Tune for the domain. Valid values are NO_ROLLBACK, DEFAULT_ROLLBACK. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

