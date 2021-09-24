# ElasticacheCacheNode
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CacheNodeCreateTime** | [**String**](string.md) | The date and time when the cache node was created. | [optional] [default to null]
**CacheNodeId** | [**String**](string.md) | The cache node identifier. A node ID is a numeric identifier (0001, 0002, etc.). The combination of cluster ID and node ID uniquely identifies every cache node used in a customer&#39;s Amazon account. | [optional] [default to null]
**CacheNodeStatus** | [**String**](string.md) | The current state of this cache node, one of the following values: available, creating, rebooting, or deleting. | [optional] [default to null]
**CustomerAvailabilityZone** | [**String**](string.md) | The Availability Zone where this node was created and now resides. | [optional] [default to null]
**CustomerOutpostArn** | [**String**](string.md) | The customer outpost ARN of the cache node. | [optional] [default to null]
**Endpoint** | [**elasticache.Endpoint**](elasticache.Endpoint.md) |  | [optional] [default to null]
**ParameterGroupStatus** | [**String**](string.md) | The status of the parameter group applied to this cache node. | [optional] [default to null]
**SourceCacheNodeId** | [**String**](string.md) | The ID of the primary node to which this read replica node is synchronized. If this field is empty, this node is not associated with a primary cluster. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

