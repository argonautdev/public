# ModelsOrganization
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | [**String**](string.md) |  | [optional] [default to null]
**DeletedAt** | [**gorm.DeletedAt**](gorm.DeletedAt.md) |  | [optional] [default to null]
**UpdatedAt** | [**String**](string.md) |  | [optional] [default to null]
**aws\_integrations** | [**List**](integrations.AWSIntegration.md) |  | [optional] [default to null]
**basic\_integrations** | [**List**](integrations.BasicIntegration.md) |  | [optional] [default to null]
**capsule** | [**List**](models.Capsule.md) | provisioned aws module | [optional] [default to null]
**environments** | [**List**](models.Environment.md) | linked Environments | [optional] [default to null]
**first\_run** | [**Boolean**](boolean.md) | set to false after setting the org name | [optional] [default to null]
**gcp\_integrations** | [**List**](integrations.GCPIntegration.md) |  | [optional] [default to null]
**gh\_installations** | [**List**](models.GhInstallation.md) | linked Github App installations | [optional] [default to null]
**git\_repos** | [**List**](models.GitRepo.md) | linked repos | [optional] [default to null]
**github\_installation\_id** | [**Integer**](integer.md) | github integration fields are below | [optional] [default to null]
**github\_repo\_id** | [**Integer**](integer.md) |  | [optional] [default to null]
**github\_repo\_name** | [**String**](string.md) |  | [optional] [default to null]
**github\_repo\_owner** | [**String**](string.md) |  | [optional] [default to null]
**helm\_repos** | [**List**](models.HelmRepo.md) | linked helm repos | [optional] [default to null]
**kube\_integrations** | [**List**](integrations.KubeIntegration.md) | auth mechanisms | [optional] [default to null]
**name** | [**String**](string.md) |  | [optional] [default to null]
**oauth\_integrations** | [**List**](integrations.OAuthIntegration.md) |  | [optional] [default to null]
**oidc\_integrations** | [**List**](integrations.OIDCIntegration.md) |  | [optional] [default to null]
**organization\_id** | [**Integer**](integer.md) |  | [optional] [default to null]
**owner\_id** | [**Integer**](integer.md) | owner of the organization | [optional] [default to null]
**registries** | [**List**](models.Registry.md) | linked registries | [optional] [default to null]
**tenant\_id** | [**String**](string.md) | tenantID comes from frontegg, which corresponds to org | [optional] [default to null]
**tf\_password** | [**String**](string.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

