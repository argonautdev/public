# V1EnvironmentApi

All URIs are relative to *http://localhost:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCurrentEnvironmentSpec**](V1EnvironmentApi.md#getCurrentEnvironmentSpec) | **GET** /environment/spec/{environment_name}/{environment_region} | Gets the last applied spec for the environment if it exists
[**listResourcesInEnvironment**](V1EnvironmentApi.md#listResourcesInEnvironment) | **GET** /environment/list-resources/{environment_name} | List all the resources in an environment
[**removeResourceInEnvironment**](V1EnvironmentApi.md#removeResourceInEnvironment) | **DELETE** /environment/github/delete/{environment_name}/{environment_region}/{resource} | Removes the resource folder from argonaut_terraform_configs
[**terragruntParserCreate**](V1EnvironmentApi.md#terragruntParserCreate) | **POST** /infra/terragrunt/create | Creates an environment and all the resources send in body
[**terragruntParserDelete**](V1EnvironmentApi.md#terragruntParserDelete) | **POST** /infra/terragrunt/delete | Deletes all the resources and the environment
[**terragruntParserUpdate**](V1EnvironmentApi.md#terragruntParserUpdate) | **POST** /infra/terragrunt/update | Updates all the resources send in body for the existing environment
[**validEnvironmentName**](V1EnvironmentApi.md#validEnvironmentName) | **GET** /env/{environment_name}/{environment_region}/check | Checks if the environment name is valid or not


<a name="getCurrentEnvironmentSpec"></a>
# **getCurrentEnvironmentSpec**
> v1.TerragruntParserRequestConfig getCurrentEnvironmentSpec(environment\_name, environment\_region)

Gets the last applied spec for the environment if it exists

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environment\_name** | **String**| Environment Name | [default to null]
 **environment\_region** | **String**| Environment Region | [default to null]

### Return type

[**v1.TerragruntParserRequestConfig**](../Models/v1.TerragruntParserRequestConfig.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listResourcesInEnvironment"></a>
# **listResourcesInEnvironment**
> integrations.AwsResources listResourcesInEnvironment(environment\_name, rds, eks, s3Bucket, elasticache)

List all the resources in an environment

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environment\_name** | **String**| Environment name | [default to null]
 **rds** | **Boolean**| includes rds in response body if true | [optional] [default to null]
 **eks** | **Boolean**| includes eks in response body if true | [optional] [default to null]
 **s3Bucket** | **Boolean**| includes s3 buckets in response body if true | [optional] [default to null]
 **elasticache** | **Boolean**| includes elasticache in response body if true | [optional] [default to null]

### Return type

[**integrations.AwsResources**](../Models/integrations.AwsResources.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="removeResourceInEnvironment"></a>
# **removeResourceInEnvironment**
> Object removeResourceInEnvironment(environment\_name, environment\_region, resource)

Removes the resource folder from argonaut_terraform_configs

    Removes the resource folder from the github repo used to manage the hcl configs. This will trigger a workflow (which will fail since the required params won&#39;t be found in the commit message). NOTE: **This must be called after successful destruction of the resource, as resource existance is not checked here**

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environment\_name** | **String**| Environment Name | [default to null]
 **environment\_region** | **String**| Environment Region | [default to null]
 **resource** | **String**| Resource - the subfolder in environment/region | [default to null]

### Return type

[**Object**](../Models/object.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="terragruntParserCreate"></a>
# **terragruntParserCreate**
> v1.TerragruntParserResponse terragruntParserCreate(Body)

Creates an environment and all the resources send in body

    Creates an environment and all the resources send in body only if the environment does not exist in the db. The (name, region) for the environment must be unique. All environments are limited to one vpc which is created even if no resources are present in the body

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body** | [**V1TerragruntParserRequestConfig**](../Models/V1TerragruntParserRequestConfig.md)| Terragrunt Parser input |

### Return type

[**v1.TerragruntParserResponse**](../Models/v1.TerragruntParserResponse.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="terragruntParserDelete"></a>
# **terragruntParserDelete**
> v1.TerragruntParserResponse terragruntParserDelete(Body)

Deletes all the resources and the environment

    Deletes all the resources if the environment exist in the db. If the environment doesn&#39;t exist in the db an error is sent. All the resources that exists within the environment will be deleted. After the successful deletion of resources the environment will be deleted from the db. This behaviour is necessary since if the deletion of resources fails we should be able to retrigger it.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body** | [**V1TerragruntParserRequestConfig**](../Models/V1TerragruntParserRequestConfig.md)| Terragrunt Parser input |

### Return type

[**v1.TerragruntParserResponse**](../Models/v1.TerragruntParserResponse.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="terragruntParserUpdate"></a>
# **terragruntParserUpdate**
> v1.TerragruntParserResponse terragruntParserUpdate(Body)

Updates all the resources send in body for the existing environment

    Updates all the resources send in body only if the environment does exist in the db. If the environment doesn&#39;t exist in the db an error is sent. If resources are removed from the body, all the resources that are removed from body are removed and their files are deleted from github. This however does not delete the environment and vpc if you want to delete the vpc you would want to trigger the delete action

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body** | [**V1TerragruntParserRequestConfig**](../Models/V1TerragruntParserRequestConfig.md)| Terragrunt Parser input |

### Return type

[**v1.TerragruntParserResponse**](../Models/v1.TerragruntParserResponse.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="validEnvironmentName"></a>
# **validEnvironmentName**
> inline_response_200 validEnvironmentName(environment\_name, environment\_region)

Checks if the environment name is valid or not

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environment\_name** | **String**| Environment name | [default to null]
 **environment\_region** | **String**| Environment region | [default to null]

### Return type

[**inline_response_200**](../Models/inline_response_200.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

