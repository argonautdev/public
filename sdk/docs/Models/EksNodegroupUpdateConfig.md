# EksNodegroupUpdateConfig
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaxUnavailable** | [**Integer**](integer.md) | The maximum number of nodes unavailable at once during a version update. Nodes will be updated in parallel. This value or maxUnavailablePercentage is required to have a value.The maximum number is 100. | [optional] [default to null]
**MaxUnavailablePercentage** | [**Integer**](integer.md) | The maximum percentage of nodes unavailable during a version update. This percentage of nodes will be updated in parallel, up to 100 nodes at once. This value or maxUnavailable is required to have a value. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

