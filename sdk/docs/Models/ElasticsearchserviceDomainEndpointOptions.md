# ElasticsearchserviceDomainEndpointOptions
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomEndpoint** | [**String**](string.md) | Specify the fully qualified domain for your custom endpoint. | [optional] [default to null]
**CustomEndpointCertificateArn** | [**String**](string.md) | Specify ACM certificate ARN for your custom endpoint. | [optional] [default to null]
**CustomEndpointEnabled** | [**Boolean**](boolean.md) | Specify if custom endpoint should be enabled for the Elasticsearch domain. | [optional] [default to null]
**EnforceHTTPS** | [**Boolean**](boolean.md) | Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain. | [optional] [default to null]
**TLSSecurityPolicy** | [**String**](string.md) | Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain. It can be one of the following values:    * Policy-Min-TLS-1-0-2019-07: TLS security policy which supports TLSv1.0    and higher.     * Policy-Min-TLS-1-2-2019-07: TLS security policy which supports only    TLSv1.2 | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

