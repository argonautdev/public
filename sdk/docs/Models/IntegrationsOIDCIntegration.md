# IntegrationsOIDCIntegration
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | [**String**](string.md) |  | [optional] [default to null]
**DeletedAt** | [**gorm.DeletedAt**](gorm.DeletedAt.md) |  | [optional] [default to null]
**ID** | [**Integer**](integer.md) |  | [optional] [default to null]
**UpdatedAt** | [**String**](string.md) |  | [optional] [default to null]
**client** | [**String**](string.md) | The name of the auth mechanism | [optional] [default to null]
**client-id** | [**List**](integer.md) | The ID issued to the Relying Party | [optional] [default to null]
**client-secret** | [**List**](integer.md) | The secret issued to the Relying Party  This is present because it used to be a required field in a kubeconfig. However, because the kube apiserver acts as a Relying Party, the client secret is not necessary. | [optional] [default to null]
**id-token** | [**List**](integer.md) | The user&#39;s JWT id token | [optional] [default to null]
**idp-certificate-authority-data** | [**List**](integer.md) | The CA data -- certificate check must be performed (16.17) | [optional] [default to null]
**idp-issuer-url** | [**List**](integer.md) | The \&quot;Issuer Identifier\&quot; of the OIDC spec (16.15) | [optional] [default to null]
**organization\_id** | [**Integer**](integer.md) | The Organization that this integration belongs to | [optional] [default to null]
**refresh-token** | [**List**](integer.md) | The user&#39;s refresh token | [optional] [default to null]
**user\_id** | [**Integer**](integer.md) | The id of the user that linked this auth mechanism | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

