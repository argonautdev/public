# ElasticsearchserviceElasticsearchClusterConfig
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ColdStorageOptions** | [**elasticsearchservice.ColdStorageOptions**](elasticsearchservice.ColdStorageOptions.md) |  | [optional] [default to null]
**DedicatedMasterCount** | [**Integer**](integer.md) | Total number of dedicated master nodes, active and on standby, for the cluster. | [optional] [default to null]
**DedicatedMasterEnabled** | [**Boolean**](boolean.md) | A boolean value to indicate whether a dedicated master node is enabled. See About Dedicated Master Nodes (http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-dedicatedmasternodes) for more information. | [optional] [default to null]
**DedicatedMasterType** | [**String**](string.md) | The instance type for a dedicated master node. | [optional] [default to null]
**InstanceCount** | [**Integer**](integer.md) | The number of instances in the specified domain cluster. | [optional] [default to null]
**InstanceType** | [**String**](string.md) | The instance type for an Elasticsearch cluster. UltraWarm instance types are not supported for data instances. | [optional] [default to null]
**WarmCount** | [**Integer**](integer.md) | The number of warm nodes in the cluster. | [optional] [default to null]
**WarmEnabled** | [**Boolean**](boolean.md) | True to enable warm storage. | [optional] [default to null]
**WarmType** | [**String**](string.md) | The instance type for the Elasticsearch cluster&#39;s warm nodes. | [optional] [default to null]
**ZoneAwarenessConfig** | [**elasticsearchservice.ZoneAwarenessConfig**](elasticsearchservice.ZoneAwarenessConfig.md) |  | [optional] [default to null]
**ZoneAwarenessEnabled** | [**Boolean**](boolean.md) | A boolean value to indicate whether zone awareness is enabled. See About Zone Awareness (http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-zoneawareness) for more information. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

