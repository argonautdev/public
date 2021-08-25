# IntegrationsAWSIntegration
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | [**String**](string.md) |  | [optional] [default to null]
**DeletedAt** | [**gorm.DeletedAt**](gorm.DeletedAt.md) |  | [optional] [default to null]
**ID** | [**Integer**](integer.md) |  | [optional] [default to null]
**UpdatedAt** | [**String**](string.md) |  | [optional] [default to null]
**aws\_access\_key\_id** | [**List**](integer.md) | The AWS access key for this IAM user | [optional] [default to null]
**aws\_account\_id** | [**String**](string.md) |  | [optional] [default to null]
**aws\_arn** | [**String**](string.md) | The AWS arn this is integration is linked to | [optional] [default to null]
**aws\_cluster\_id** | [**List**](integer.md) | The AWS cluster ID See https://github.com/kubernetes-sigs/aws-iam-authenticator#what-is-a-cluster-id | [optional] [default to null]
**aws\_region** | [**String**](string.md) | The optional AWS region (required by some session configurations) | [optional] [default to null]
**aws\_secret\_access\_key** | [**List**](integer.md) | The AWS secret key for this IAM user | [optional] [default to null]
**aws\_session\_token** | [**List**](integer.md) | An optional session token, if the user is assuming a role | [optional] [default to null]
**organization\_id** | [**Integer**](integer.md) | The Organization that this integration belongs to | [optional] [default to null]
**user\_id** | [**Integer**](integer.md) | The id of the user that linked this auth mechanism | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

