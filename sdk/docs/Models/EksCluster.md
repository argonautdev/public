# EksCluster
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Arn** | [**String**](string.md) | The Amazon Resource Name (ARN) of the cluster. | [optional] [default to null]
**CertificateAuthority** | [**eks.Certificate**](eks.Certificate.md) |  | [optional] [default to null]
**ClientRequestToken** | [**String**](string.md) | Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. | [optional] [default to null]
**ConnectorConfig** | [**eks.ConnectorConfigResponse**](eks.ConnectorConfigResponse.md) |  | [optional] [default to null]
**CreatedAt** | [**String**](string.md) | The Unix epoch timestamp in seconds for when the cluster was created. | [optional] [default to null]
**EncryptionConfig** | [**List**](eks.EncryptionConfig.md) | The encryption configuration for the cluster. | [optional] [default to null]
**Endpoint** | [**String**](string.md) | The endpoint for your Kubernetes API server. | [optional] [default to null]
**Identity** | [**eks.Identity**](eks.Identity.md) |  | [optional] [default to null]
**KubernetesNetworkConfig** | [**eks.KubernetesNetworkConfigResponse**](eks.KubernetesNetworkConfigResponse.md) |  | [optional] [default to null]
**Logging** | [**eks.Logging**](eks.Logging.md) |  | [optional] [default to null]
**Name** | [**String**](string.md) | The name of the cluster. | [optional] [default to null]
**PlatformVersion** | [**String**](string.md) | The platform version of your Amazon EKS cluster. For more information, see Platform Versions (https://docs.aws.amazon.com/eks/latest/userguide/platform-versions.html) in the Amazon EKS User Guide . | [optional] [default to null]
**ResourcesVpcConfig** | [**eks.VpcConfigResponse**](eks.VpcConfigResponse.md) |  | [optional] [default to null]
**RoleArn** | [**String**](string.md) | The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to Amazon Web Services API operations on your behalf. | [optional] [default to null]
**Status** | [**String**](string.md) | The current status of the cluster. | [optional] [default to null]
**Tags** | [**Map**](string.md) | The metadata that you apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Cluster tags do not propagate to any other resources associated with the cluster. | [optional] [default to null]
**Version** | [**String**](string.md) | The Kubernetes server version for the cluster. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

