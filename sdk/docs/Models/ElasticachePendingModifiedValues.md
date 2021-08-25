# ElasticachePendingModifiedValues
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthTokenStatus** | [**String**](string.md) | The auth token status | [optional] [default to null]
**CacheNodeIdsToRemove** | [**List**](string.md) | A list of cache node IDs that are being removed (or will be removed) from the cluster. A node ID is a 4-digit numeric identifier (0001, 0002, etc.). | [optional] [default to null]
**CacheNodeType** | [**String**](string.md) | The cache node type that this cluster or replication group is scaled to. | [optional] [default to null]
**EngineVersion** | [**String**](string.md) | The new cache engine version that the cluster runs. | [optional] [default to null]
**LogDeliveryConfigurations** | [**List**](elasticache.PendingLogDeliveryConfiguration.md) | The log delivery configurations being modified | [optional] [default to null]
**NumCacheNodes** | [**Integer**](integer.md) | The new number of cache nodes for the cluster.  For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 40. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

