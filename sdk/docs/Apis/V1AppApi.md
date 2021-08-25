# V1AppApi

All URIs are relative to *http://localhost:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appDelete**](V1AppApi.md#appDelete) | **POST** /appDelete | Deletes an app
[**appDeploy**](V1AppApi.md#appDeploy) | **POST** /appDeploy | Deploys an app using the art.yaml file
[**getApplicationDetails**](V1AppApi.md#getApplicationDetails) | **POST** /getApplicationDetails | Get all the details for a given application in a cluster


<a name="appDelete"></a>
# **appDelete**
> List appDelete(Body)

Deletes an app

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body** | [**TypesAppDeleteRequest**](../Models/TypesAppDeleteRequest.md)| App delete request |

### Return type

[**List**](../Models/types.AppDeleteResponse.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="appDeploy"></a>
# **appDeploy**
> release.Release appDeploy(Body)

Deploys an app using the art.yaml file

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body** | [**TypesAppDeployRequest**](../Models/TypesAppDeployRequest.md)| App deploy request |

### Return type

[**release.Release**](../Models/release.Release.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getApplicationDetails"></a>
# **getApplicationDetails**
> v1.GetApplicationDetailsResponse getApplicationDetails(Body)

Get all the details for a given application in a cluster

    Get Application Details will return the list of the following &#x60;PodStruct&#x60;, &#x60;ServiceStruct&#x60;,&#x60;SecretStruct&#x60;, &#x60;ConfigMapStruct&#x60;, &#x60;PersistentVolumeStruct&#x60;, &#x60;DaemonSetStruct&#x60; &#x60;StatefulSetStruct&#x60;, and &#x60;DeploymentStruct&#x60;. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body** | [**V1GetApplicationDetailsHasuraRequest**](../Models/V1GetApplicationDetailsHasuraRequest.md)| Get Application Details Request Body |

### Return type

[**v1.GetApplicationDetailsResponse**](../Models/v1.GetApplicationDetailsResponse.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

