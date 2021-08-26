# V1AppApi

All URIs are relative to *http://localhost:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appDelete**](V1AppApi.md#appDelete) | **POST** /appDelete | Deletes an app
[**appDeploy**](V1AppApi.md#appDeploy) | **POST** /appDeploy | Deploys an app using the art.yaml file
[**deletePod**](V1AppApi.md#deletePod) | **DELETE** /pods/delete/{cluster_name}/{cluster_region}/{pod_name} | Deletes the given pod in the (namespace, cluster, region)
[**getApplicationDetails**](V1AppApi.md#getApplicationDetails) | **POST** /getApplicationDetails | Get all the details for a given application in a cluster
[**getPodsForDeployment**](V1AppApi.md#getPodsForDeployment) | **GET** /pods/list/{cluster_name}/{cluster_region}/{deployment_name} | Get all the pods for the given deployment
[**logPod**](V1AppApi.md#logPod) | **GET** /pods/logs/{cluster_name}/{cluster_region}/{pod_name} | Shows the logs of the given pod in the (namespace, cluster, region)


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

<a name="deletePod"></a>
# **deletePod**
> basic.JSONMessage deletePod(cluster\_name, cluster\_region, pod\_name, namespace)

Deletes the given pod in the (namespace, cluster, region)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cluster\_name** | **String**| Cluster name in which the pods are to be searched for | [default to null]
 **cluster\_region** | **String**| The region of the cluster | [default to null]
 **pod\_name** | **String**| Name of the pod that needs to be deleted | [default to null]
 **namespace** | **String**| searches for in the namespace | [optional] [default to tools]

### Return type

[**basic.JSONMessage**](../Models/basic.JSONMessage.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
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

<a name="getPodsForDeployment"></a>
# **getPodsForDeployment**
> v1.PodList getPodsForDeployment(cluster\_name, cluster\_region, deployment\_name, namespace)

Get all the pods for the given deployment

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cluster\_name** | **String**| Cluster name in which the pods are to be searched for | [default to null]
 **cluster\_region** | **String**| The region of the cluster | [default to null]
 **deployment\_name** | **String**| Deployment name for which the pods are to be searched for | [default to null]
 **namespace** | **String**| searches for in the namespace | [optional] [default to tools]

### Return type

[**v1.PodList**](../Models/v1.PodList.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="logPod"></a>
# **logPod**
> String logPod(cluster\_name, cluster\_region, pod\_name, namespace)

Shows the logs of the given pod in the (namespace, cluster, region)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cluster\_name** | **String**| Cluster name in which the pods are to be searched for | [default to null]
 **cluster\_region** | **String**| The region of the cluster | [default to null]
 **pod\_name** | **String**| Name of the pod | [default to null]
 **namespace** | **String**| searches for in the namespace | [optional] [default to tools]

### Return type

[**String**](../Models/string.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

