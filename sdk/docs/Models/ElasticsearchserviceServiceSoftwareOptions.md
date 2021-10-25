# ElasticsearchserviceServiceSoftwareOptions
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutomatedUpdateDate** | [**String**](string.md) | Timestamp, in Epoch time, until which you can manually request a service software update. After this date, we automatically update your service software. | [optional] [default to null]
**Cancellable** | [**Boolean**](boolean.md) | True if you are able to cancel your service software version update. False if you are not able to cancel your service software version. | [optional] [default to null]
**CurrentVersion** | [**String**](string.md) | The current service software version that is present on the domain. | [optional] [default to null]
**Description** | [**String**](string.md) | The description of the UpdateStatus. | [optional] [default to null]
**NewVersion** | [**String**](string.md) | The new service software version if one is available. | [optional] [default to null]
**OptionalDeployment** | [**Boolean**](boolean.md) | True if a service software is never automatically updated. False if a service software is automatically updated after AutomatedUpdateDate. | [optional] [default to null]
**UpdateAvailable** | [**Boolean**](boolean.md) | True if you are able to update you service software version. False if you are not able to update your service software version. | [optional] [default to null]
**UpdateStatus** | [**String**](string.md) | The status of your service software update. This field can take the following values: ELIGIBLE, PENDING_UPDATE, IN_PROGRESS, COMPLETED, and NOT_ELIGIBLE. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

