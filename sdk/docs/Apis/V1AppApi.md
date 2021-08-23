# V1AppApi

All URIs are relative to *http://localhost:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appDelete**](V1AppApi.md#appDelete) | **POST** /appDelete | Deletes an app
[**appDeploy**](V1AppApi.md#appDeploy) | **POST** /appDeploy | Deploys an app using the art.yaml file


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

