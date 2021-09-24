# EksConnectorConfigResponse
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivationCode** | [**String**](string.md) | A unique code associated with the cluster for registration purposes. | [optional] [default to null]
**ActivationExpiry** | [**String**](string.md) | The expiration time of the connected cluster. The cluster&#39;s YAML file must be applied through the native provider. | [optional] [default to null]
**ActivationId** | [**String**](string.md) | A unique ID associated with the cluster for registration purposes. | [optional] [default to null]
**Provider** | [**String**](string.md) | The cluster&#39;s cloud service provider. | [optional] [default to null]
**RoleArn** | [**String**](string.md) | The Amazon Resource Name (ARN) of the role that is used by the EKS connector to communicate with AWS services from the connected Kubernetes cluster. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

