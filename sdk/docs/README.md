# Documentation for Midgard API Docs

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost:8000/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*V1AppApi* | [**appDelete**](Apis/V1AppApi.md#appdelete) | **POST** /appDelete | Deletes an app
*V1AppApi* | [**appDeploy**](Apis/V1AppApi.md#appdeploy) | **POST** /appDeploy | Deploys an app using the art.yaml file
*V1EnvironmentApi* | [**getCurrentEnvironmentSpec**](Apis/V1EnvironmentApi.md#getcurrentenvironmentspec) | **GET** /environment/spec/{environment_name}/{environment_region} | Gets the last applied spec for the environment if it exists
*V1EnvironmentApi* | [**listResourcesInEnvironment**](Apis/V1EnvironmentApi.md#listresourcesinenvironment) | **GET** /environment/list-resources/{environment_name} | List all the resources in an environment
*V1EnvironmentApi* | [**removeResourceInEnvironment**](Apis/V1EnvironmentApi.md#removeresourceinenvironment) | **DELETE** /environment/github/delete/{environment_name}/{environment_region}/{resource} | Removes the resource folder from argonaut_terraform_configs
*V1EnvironmentApi* | [**terragruntParserCreate**](Apis/V1EnvironmentApi.md#terragruntparsercreate) | **POST** /infra/terragrunt/create | Creates an environment and all the resources send in body
*V1EnvironmentApi* | [**terragruntParserDelete**](Apis/V1EnvironmentApi.md#terragruntparserdelete) | **POST** /infra/terragrunt/delete | Deletes all the resources and the environment
*V1EnvironmentApi* | [**terragruntParserUpdate**](Apis/V1EnvironmentApi.md#terragruntparserupdate) | **POST** /infra/terragrunt/update | Updates all the resources send in body for the existing environment
*V1GithubApi* | [**getGhInstallations**](Apis/V1GithubApi.md#getghinstallations) | **GET** /getGhInstallations | Get all the github installations associated with the current argonaut organization
*V1MediaApi* | [**mediaDownload**](Apis/V1MediaApi.md#mediadownload) | **GET** /media/download/{path} | Download media file at the given path


<a name="documentation-for-models"></a>
## Documentation for Models

 - [ChartChart](./Models/ChartChart.md)
 - [ChartDependency](./Models/ChartDependency.md)
 - [ChartFile](./Models/ChartFile.md)
 - [ChartLock](./Models/ChartLock.md)
 - [ChartMaintainer](./Models/ChartMaintainer.md)
 - [ChartMetadata](./Models/ChartMetadata.md)
 - [GormDeletedAt](./Models/GormDeletedAt.md)
 - [InlineResponseDefault](./Models/InlineResponseDefault.md)
 - [IntegrationsAWSIntegration](./Models/IntegrationsAWSIntegration.md)
 - [ModelsGhInstallation](./Models/ModelsGhInstallation.md)
 - [ModelsJob](./Models/ModelsJob.md)
 - [ReleaseHook](./Models/ReleaseHook.md)
 - [ReleaseHookExecution](./Models/ReleaseHookExecution.md)
 - [ReleaseInfo](./Models/ReleaseInfo.md)
 - [ReleaseRelease](./Models/ReleaseRelease.md)
 - [TypesAppDeleteRequest](./Models/TypesAppDeleteRequest.md)
 - [TypesAppDeleteResponse](./Models/TypesAppDeleteResponse.md)
 - [TypesAppDeployRequest](./Models/TypesAppDeployRequest.md)
 - [TypesCluster](./Models/TypesCluster.md)
 - [TypesNodeGroup](./Models/TypesNodeGroup.md)
 - [V1AwsS3Bucket](./Models/V1AwsS3Bucket.md)
 - [V1AwsS3StaticSite](./Models/V1AwsS3StaticSite.md)
 - [V1ElasticacheRedis](./Models/V1ElasticacheRedis.md)
 - [V1EnvironmentRequest](./Models/V1EnvironmentRequest.md)
 - [V1RDS](./Models/V1RDS.md)
 - [V1TerragruntParserRequestConfig](./Models/V1TerragruntParserRequestConfig.md)
 - [V1TerragruntParserResponse](./Models/V1TerragruntParserResponse.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="JWTKeyAuth"></a>
### JWTKeyAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

