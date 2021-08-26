# ModelsHelmRepo
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AWSIntegrationID** | [**Integer**](integer.md) |  | [optional] [default to null]
**BasicAuthIntegrationID** | [**Integer**](integer.md) | ------------------------------------------------------------------ All fields below this line are encrypted before storage ------------------------------------------------------------------ | [optional] [default to null]
**CreatedAt** | [**String**](string.md) |  | [optional] [default to null]
**DeletedAt** | [**gorm.DeletedAt**](gorm.DeletedAt.md) |  | [optional] [default to null]
**GCPIntegrationID** | [**Integer**](integer.md) |  | [optional] [default to null]
**ID** | [**Integer**](integer.md) |  | [optional] [default to null]
**TokenCache** | [**integrations.HelmRepoTokenCache**](integrations.HelmRepoTokenCache.md) |  | [optional] [default to null]
**UpdatedAt** | [**String**](string.md) |  | [optional] [default to null]
**cluster\_id** | [**Integer**](integer.md) | The cluster this repo is connected to | [optional] [default to null]
**name** | [**String**](string.md) | Name given to the Helm repository | [optional] [default to null]
**organization\_id** | [**Integer**](integer.md) | The organization that this integration belongs to | [optional] [default to null]
**repo\_url** | [**String**](string.md) | RepoURL is the URL to the helm repo. This varies based on the integration type. For example, for AWS S3 this may be prefixed with s3://, or for GCS it may be gs:// | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

