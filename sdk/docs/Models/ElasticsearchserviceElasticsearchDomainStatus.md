# ElasticsearchserviceElasticsearchDomainStatus
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ARN** | [**String**](string.md) | The Amazon resource name (ARN) of an Elasticsearch domain. See Identifiers for IAM Entities (http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html) in Using AWS Identity and Access Management for more information.  ARN is a required field | [optional] [default to null]
**AccessPolicies** | [**String**](string.md) | IAM access policy as a JSON-formatted string. | [optional] [default to null]
**AdvancedOptions** | [**Map**](string.md) | Specifies the status of the AdvancedOptions | [optional] [default to null]
**AdvancedSecurityOptions** | [**elasticsearchservice.AdvancedSecurityOptions**](elasticsearchservice.AdvancedSecurityOptions.md) |  | [optional] [default to null]
**AutoTuneOptions** | [**elasticsearchservice.AutoTuneOptionsOutput**](elasticsearchservice.AutoTuneOptionsOutput.md) |  | [optional] [default to null]
**CognitoOptions** | [**elasticsearchservice.CognitoOptions**](elasticsearchservice.CognitoOptions.md) |  | [optional] [default to null]
**Created** | [**Boolean**](boolean.md) | The domain creation status. True if the creation of an Elasticsearch domain is complete. False if domain creation is still in progress. | [optional] [default to null]
**Deleted** | [**Boolean**](boolean.md) | The domain deletion status. True if a delete request has been received for the domain but resource cleanup is still in progress. False if the domain has not been deleted. Once domain deletion is complete, the status of the domain is no longer returned. | [optional] [default to null]
**DomainEndpointOptions** | [**elasticsearchservice.DomainEndpointOptions**](elasticsearchservice.DomainEndpointOptions.md) |  | [optional] [default to null]
**DomainId** | [**String**](string.md) | The unique identifier for the specified Elasticsearch domain.  DomainId is a required field | [optional] [default to null]
**DomainName** | [**String**](string.md) | The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).  DomainName is a required field | [optional] [default to null]
**EBSOptions** | [**elasticsearchservice.EBSOptions**](elasticsearchservice.EBSOptions.md) |  | [optional] [default to null]
**ElasticsearchClusterConfig** | [**elasticsearchservice.ElasticsearchClusterConfig**](elasticsearchservice.ElasticsearchClusterConfig.md) |  | [optional] [default to null]
**ElasticsearchVersion** | [**String**](string.md) |  | [optional] [default to null]
**EncryptionAtRestOptions** | [**elasticsearchservice.EncryptionAtRestOptions**](elasticsearchservice.EncryptionAtRestOptions.md) |  | [optional] [default to null]
**Endpoint** | [**String**](string.md) | The Elasticsearch domain endpoint that you use to submit index and search requests. | [optional] [default to null]
**Endpoints** | [**Map**](string.md) | Map containing the Elasticsearch domain endpoints used to submit index and search requests. Example key, value: &#39;vpc&#39;,&#39;vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com&#39;. | [optional] [default to null]
**LogPublishingOptions** | [**Map**](elasticsearchservice.LogPublishingOption.md) | Log publishing options for the given domain. | [optional] [default to null]
**NodeToNodeEncryptionOptions** | [**elasticsearchservice.NodeToNodeEncryptionOptions**](elasticsearchservice.NodeToNodeEncryptionOptions.md) |  | [optional] [default to null]
**Processing** | [**Boolean**](boolean.md) | The status of the Elasticsearch domain configuration. True if Amazon Elasticsearch Service is processing configuration changes. False if the configuration is active. | [optional] [default to null]
**ServiceSoftwareOptions** | [**elasticsearchservice.ServiceSoftwareOptions**](elasticsearchservice.ServiceSoftwareOptions.md) |  | [optional] [default to null]
**SnapshotOptions** | [**elasticsearchservice.SnapshotOptions**](elasticsearchservice.SnapshotOptions.md) |  | [optional] [default to null]
**UpgradeProcessing** | [**Boolean**](boolean.md) | The status of an Elasticsearch domain version upgrade. True if Amazon Elasticsearch Service is undergoing a version upgrade. False if the configuration is active. | [optional] [default to null]
**VPCOptions** | [**elasticsearchservice.VPCDerivedInfo**](elasticsearchservice.VPCDerivedInfo.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

