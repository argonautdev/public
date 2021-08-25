# IntegrationsKubeIntegration
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | [**String**](string.md) |  | [optional] [default to null]
**DeletedAt** | [**gorm.DeletedAt**](gorm.DeletedAt.md) |  | [optional] [default to null]
**ID** | [**Integer**](integer.md) |  | [optional] [default to null]
**UpdatedAt** | [**String**](string.md) |  | [optional] [default to null]
**client-certificate-data** | [**List**](integer.md) | Certificate data is used by x509 auth mechanisms over TLS | [optional] [default to null]
**client-key-data** | [**List**](integer.md) |  | [optional] [default to null]
**kubeconfig** | [**List**](integer.md) | The raw kubeconfig, used by local auth mechanisms | [optional] [default to null]
**mechanism** | [**String**](string.md) | The name of the auth mechanism | [optional] [default to null]
**organization\_id** | [**Integer**](integer.md) | The Organization that this integration belongs to | [optional] [default to null]
**password** | [**List**](integer.md) |  | [optional] [default to null]
**token** | [**List**](integer.md) | Token is used for bearer-token auth mechanisms | [optional] [default to null]
**user\_id** | [**Integer**](integer.md) | The id of the user that linked this auth mechanism | [optional] [default to null]
**username** | [**List**](integer.md) | Username/Password for basic authentication to a cluster | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

