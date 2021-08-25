# Documentation for Midgard API Docs

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost:8000/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*V1AppApi* | [**appDelete**](Apis/V1AppApi.md#appdelete) | **POST** /appDelete | Deletes an app
*V1AppApi* | [**appDeploy**](Apis/V1AppApi.md#appdeploy) | **POST** /appDeploy | Deploys an app using the art.yaml file
*V1AppApi* | [**getApplicationDetails**](Apis/V1AppApi.md#getapplicationdetails) | **POST** /getApplicationDetails | Get all the details for a given application in a cluster
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
 - [EksAutoScalingGroup](./Models/EksAutoScalingGroup.md)
 - [EksCertificate](./Models/EksCertificate.md)
 - [EksCluster](./Models/EksCluster.md)
 - [EksEncryptionConfig](./Models/EksEncryptionConfig.md)
 - [EksIdentity](./Models/EksIdentity.md)
 - [EksIssue](./Models/EksIssue.md)
 - [EksKubernetesNetworkConfigResponse](./Models/EksKubernetesNetworkConfigResponse.md)
 - [EksLaunchTemplateSpecification](./Models/EksLaunchTemplateSpecification.md)
 - [EksLogSetup](./Models/EksLogSetup.md)
 - [EksLogging](./Models/EksLogging.md)
 - [EksNodegroup](./Models/EksNodegroup.md)
 - [EksNodegroupHealth](./Models/EksNodegroupHealth.md)
 - [EksNodegroupResources](./Models/EksNodegroupResources.md)
 - [EksNodegroupScalingConfig](./Models/EksNodegroupScalingConfig.md)
 - [EksNodegroupUpdateConfig](./Models/EksNodegroupUpdateConfig.md)
 - [EksOIDC](./Models/EksOIDC.md)
 - [EksProvider](./Models/EksProvider.md)
 - [EksRemoteAccessConfig](./Models/EksRemoteAccessConfig.md)
 - [EksTaint](./Models/EksTaint.md)
 - [EksVpcConfigResponse](./Models/EksVpcConfigResponse.md)
 - [ElasticacheCacheCluster](./Models/ElasticacheCacheCluster.md)
 - [ElasticacheCacheNode](./Models/ElasticacheCacheNode.md)
 - [ElasticacheCacheParameterGroupStatus](./Models/ElasticacheCacheParameterGroupStatus.md)
 - [ElasticacheCacheSecurityGroupMembership](./Models/ElasticacheCacheSecurityGroupMembership.md)
 - [ElasticacheCloudWatchLogsDestinationDetails](./Models/ElasticacheCloudWatchLogsDestinationDetails.md)
 - [ElasticacheDestinationDetails](./Models/ElasticacheDestinationDetails.md)
 - [ElasticacheEndpoint](./Models/ElasticacheEndpoint.md)
 - [ElasticacheKinesisFirehoseDestinationDetails](./Models/ElasticacheKinesisFirehoseDestinationDetails.md)
 - [ElasticacheLogDeliveryConfiguration](./Models/ElasticacheLogDeliveryConfiguration.md)
 - [ElasticacheNotificationConfiguration](./Models/ElasticacheNotificationConfiguration.md)
 - [ElasticachePendingLogDeliveryConfiguration](./Models/ElasticachePendingLogDeliveryConfiguration.md)
 - [ElasticachePendingModifiedValues](./Models/ElasticachePendingModifiedValues.md)
 - [ElasticacheSecurityGroupMembership](./Models/ElasticacheSecurityGroupMembership.md)
 - [ElasticacheTag](./Models/ElasticacheTag.md)
 - [ElasticacheTagListMessage](./Models/ElasticacheTagListMessage.md)
 - [GormDeletedAt](./Models/GormDeletedAt.md)
 - [InlineResponseDefault](./Models/InlineResponseDefault.md)
 - [IntegrationsAWSIntegration](./Models/IntegrationsAWSIntegration.md)
 - [IntegrationsAwsResources](./Models/IntegrationsAwsResources.md)
 - [IntegrationsBasicIntegration](./Models/IntegrationsBasicIntegration.md)
 - [IntegrationsBucketsInRegion](./Models/IntegrationsBucketsInRegion.md)
 - [IntegrationsDescribeClusterOutput](./Models/IntegrationsDescribeClusterOutput.md)
 - [IntegrationsDescribeDBInstancesOutput](./Models/IntegrationsDescribeDBInstancesOutput.md)
 - [IntegrationsDescribeElasticacheCluster](./Models/IntegrationsDescribeElasticacheCluster.md)
 - [IntegrationsGCPIntegration](./Models/IntegrationsGCPIntegration.md)
 - [IntegrationsHelmRepoTokenCache](./Models/IntegrationsHelmRepoTokenCache.md)
 - [IntegrationsKubeIntegration](./Models/IntegrationsKubeIntegration.md)
 - [IntegrationsOAuthIntegration](./Models/IntegrationsOAuthIntegration.md)
 - [IntegrationsOIDCIntegration](./Models/IntegrationsOIDCIntegration.md)
 - [IntegrationsRegTokenCache](./Models/IntegrationsRegTokenCache.md)
 - [ModelsCapsule](./Models/ModelsCapsule.md)
 - [ModelsEnvironment](./Models/ModelsEnvironment.md)
 - [ModelsGhInstallation](./Models/ModelsGhInstallation.md)
 - [ModelsGitRepo](./Models/ModelsGitRepo.md)
 - [ModelsHelmRepo](./Models/ModelsHelmRepo.md)
 - [ModelsJob](./Models/ModelsJob.md)
 - [ModelsOrganization](./Models/ModelsOrganization.md)
 - [ModelsRegistry](./Models/ModelsRegistry.md)
 - [RdsAvailabilityZone](./Models/RdsAvailabilityZone.md)
 - [RdsDBInstance](./Models/RdsDBInstance.md)
 - [RdsDBInstanceAutomatedBackupsReplication](./Models/RdsDBInstanceAutomatedBackupsReplication.md)
 - [RdsDBInstanceRole](./Models/RdsDBInstanceRole.md)
 - [RdsDBInstanceStatusInfo](./Models/RdsDBInstanceStatusInfo.md)
 - [RdsDBParameterGroupStatus](./Models/RdsDBParameterGroupStatus.md)
 - [RdsDBSecurityGroupMembership](./Models/RdsDBSecurityGroupMembership.md)
 - [RdsDBSubnetGroup](./Models/RdsDBSubnetGroup.md)
 - [RdsDescribeDBInstancesOutput](./Models/RdsDescribeDBInstancesOutput.md)
 - [RdsDomainMembership](./Models/RdsDomainMembership.md)
 - [RdsEndpoint](./Models/RdsEndpoint.md)
 - [RdsOptionGroupMembership](./Models/RdsOptionGroupMembership.md)
 - [RdsOutpost](./Models/RdsOutpost.md)
 - [RdsPendingCloudwatchLogsExports](./Models/RdsPendingCloudwatchLogsExports.md)
 - [RdsPendingModifiedValues](./Models/RdsPendingModifiedValues.md)
 - [RdsProcessorFeature](./Models/RdsProcessorFeature.md)
 - [RdsSubnet](./Models/RdsSubnet.md)
 - [RdsTag](./Models/RdsTag.md)
 - [RdsVpcSecurityGroupMembership](./Models/RdsVpcSecurityGroupMembership.md)
 - [ReleaseHook](./Models/ReleaseHook.md)
 - [ReleaseHookExecution](./Models/ReleaseHookExecution.md)
 - [ReleaseInfo](./Models/ReleaseInfo.md)
 - [ReleaseRelease](./Models/ReleaseRelease.md)
 - [S3Bucket](./Models/S3Bucket.md)
 - [S3Owner](./Models/S3Owner.md)
 - [TypesAppDeleteRequest](./Models/TypesAppDeleteRequest.md)
 - [TypesAppDeleteResponse](./Models/TypesAppDeleteResponse.md)
 - [TypesAppDeployRequest](./Models/TypesAppDeployRequest.md)
 - [TypesCluster](./Models/TypesCluster.md)
 - [TypesNodeGroup](./Models/TypesNodeGroup.md)
 - [V1AwsS3Bucket](./Models/V1AwsS3Bucket.md)
 - [V1AwsS3StaticSite](./Models/V1AwsS3StaticSite.md)
 - [V1ConfigMapStruct](./Models/V1ConfigMapStruct.md)
 - [V1DaemonSetStruct](./Models/V1DaemonSetStruct.md)
 - [V1DeploymentStruct](./Models/V1DeploymentStruct.md)
 - [V1ElasticacheRedis](./Models/V1ElasticacheRedis.md)
 - [V1EnvironmentRequest](./Models/V1EnvironmentRequest.md)
 - [V1GetApplicationDetailsHasuraRequest](./Models/V1GetApplicationDetailsHasuraRequest.md)
 - [V1GetApplicationDetailsHasuraRequestInput](./Models/V1GetApplicationDetailsHasuraRequestInput.md)
 - [V1GetApplicationDetailsHasuraRequestInputArg](./Models/V1GetApplicationDetailsHasuraRequestInputArg.md)
 - [V1GetApplicationDetailsResponse](./Models/V1GetApplicationDetailsResponse.md)
 - [V1PersistentVolumeStruct](./Models/V1PersistentVolumeStruct.md)
 - [V1PodCondition](./Models/V1PodCondition.md)
 - [V1PodStruct](./Models/V1PodStruct.md)
 - [V1RDS](./Models/V1RDS.md)
 - [V1SecretStruct](./Models/V1SecretStruct.md)
 - [V1ServiceStruct](./Models/V1ServiceStruct.md)
 - [V1StatefulSetStruct](./Models/V1StatefulSetStruct.md)
 - [V1TerragruntParserRequestConfig](./Models/V1TerragruntParserRequestConfig.md)
 - [V1TerragruntParserResponse](./Models/V1TerragruntParserResponse.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="JWTKeyAuth"></a>
### JWTKeyAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

