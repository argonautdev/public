# V1AppApi

All URIs are relative to *http://localhost:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appDelete**](V1AppApi.md#appDelete) | **POST** /appDelete | Deletes an app
[**appDeploy**](V1AppApi.md#appDeploy) | **POST** /appDeploy | Deploys an app using the art.yaml file
[**appRestart**](V1AppApi.md#appRestart) | **PATCH** /app/restart/{environment_name}/{environment_region}/{cluster_name}/{app_name}/{app_type} | Restarts the app in a rolling fashion
[**appSecretDelete**](V1AppApi.md#appSecretDelete) | **POST** /app/secret/delete | Deletes the app secret if it exists otherwise returns an error saying the app secret doesn&#39;t exist
[**appSecretGet**](V1AppApi.md#appSecretGet) | **POST** /app/secret/get | Return the app secret if it exists otherwise returns an error saying the app secret doesn&#39;t exist
[**appSecretSet**](V1AppApi.md#appSecretSet) | **POST** /app/secret/set | Creates/Updates app secret with the name &#x60;art-{appName}-secret&#x60;
[**authenticationTokenForCluster**](V1AppApi.md#authenticationTokenForCluster) | **GET** /auth-token | Get the token for the cluster
[**deletePod**](V1AppApi.md#deletePod) | **DELETE** /pods/delete/{cluster_name}/{cluster_region}/{pod_name} | Deletes the given pod in the (namespace, cluster, region)
[**getApplicationDetails**](V1AppApi.md#getApplicationDetails) | **POST** /getApplicationDetails | Get all the details for a given application in a cluster
[**getPod**](V1AppApi.md#getPod) | **GET** /pods/get/{cluster_name}/{cluster_region}/{pod_name} | Shows the pod information
[**getPodsForDeployment**](V1AppApi.md#getPodsForDeployment) | **GET** /pods/list/{cluster_name}/{cluster_region}/{resource_type}/{resource_name} | Get all the pods for the given deployment
[**listResourceInYaml**](V1AppApi.md#listResourceInYaml) | **GET** /list-resources/{cluster_name}/{cluster_region} | Get all the resource description in yaml format
[**logPod**](V1AppApi.md#logPod) | **GET** /pods/logs/{cluster_name}/{cluster_region}/{pod_name} | Shows the logs of the given pod in the (namespace, cluster, region)
[**toolDeleteFromLibrary**](V1AppApi.md#toolDeleteFromLibrary) | **POST** /tools/delete | Delete tools from supported library
[**toolInstallFromLibrary**](V1AppApi.md#toolInstallFromLibrary) | **POST** /toolInstall | Install tools from the supported library


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

<a name="appRestart"></a>
# **appRestart**
> String appRestart(environment\_name, environment\_region, cluster\_name, app\_name, app\_type)

Restarts the app in a rolling fashion

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environment\_name** | **String**| Environment name | [default to null]
 **environment\_region** | **String**| Environment region | [default to null]
 **cluster\_name** | **String**| Name of the cluster | [default to null]
 **app\_name** | **String**| Name of the app | [default to null]
 **app\_type** | **String**| App Type enum | [default to null]

### Return type

[**String**](../Models/string.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="appSecretDelete"></a>
# **appSecretDelete**
> v1.Secret appSecretDelete(Body)

Deletes the app secret if it exists otherwise returns an error saying the app secret doesn&#39;t exist

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body** | [**V1AppSecretRequest**](../Models/V1AppSecretRequest.md)| App secret request body |

### Return type

[**v1.Secret**](../Models/v1.Secret.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="appSecretGet"></a>
# **appSecretGet**
> v1.Secret appSecretGet(Body)

Return the app secret if it exists otherwise returns an error saying the app secret doesn&#39;t exist

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body** | [**V1AppSecretRequest**](../Models/V1AppSecretRequest.md)| App secret request body |

### Return type

[**v1.Secret**](../Models/v1.Secret.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="appSecretSet"></a>
# **appSecretSet**
> v1.Secret appSecretSet(Body)

Creates/Updates app secret with the name &#x60;art-{appName}-secret&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body** | [**V1AppSecretRequest**](../Models/V1AppSecretRequest.md)| App secret request body |

### Return type

[**v1.Secret**](../Models/v1.Secret.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="authenticationTokenForCluster"></a>
# **authenticationTokenForCluster**
> String authenticationTokenForCluster(cluster\_name, cluster\_region, namespace)

Get the token for the cluster

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cluster\_name** | **String**| Cluster name in which the pods are to be searched for | [default to null]
 **cluster\_region** | **String**| The region of the cluster | [default to null]
 **namespace** | **String**| searches for in the namespace | [optional] [default to tools]

### Return type

[**String**](../Models/string.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
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

<a name="getPod"></a>
# **getPod**
> v1.Pod getPod(cluster\_name, cluster\_region, pod\_name, namespace)

Shows the pod information

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cluster\_name** | **String**| Cluster name | [default to null]
 **cluster\_region** | **String**| The region of the cluster | [default to null]
 **pod\_name** | **String**| Name of the pod | [default to null]
 **namespace** | **String**| searches for in the namespace | [optional] [default to tools]

### Return type

[**v1.Pod**](../Models/v1.Pod.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPodsForDeployment"></a>
# **getPodsForDeployment**
> v1.PodList getPodsForDeployment(cluster\_name, cluster\_region, resource\_type, resource\_name, namespace)

Get all the pods for the given deployment

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cluster\_name** | **String**| Cluster name in which the pods are to be searched for | [default to null]
 **cluster\_region** | **String**| The region of the cluster | [default to null]
 **resource\_type** | **String**| Type of the resource we need to search the pods for | [default to null] [enum: daemon-set, deployment, stateful-set, replica-set]
 **resource\_name** | **String**| Deployment name for which the pods are to be searched for | [default to null]
 **namespace** | **String**| searches for in the namespace | [optional] [default to tools]

### Return type

[**v1.PodList**](../Models/v1.PodList.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listResourceInYaml"></a>
# **listResourceInYaml**
> kubernetes.ListResourceInYamlOutput listResourceInYaml(cluster\_name, cluster\_region, resource\_type, namespace)

Get all the resource description in yaml format

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cluster\_name** | **String**| Cluster name | [default to null]
 **cluster\_region** | **String**| The region of the cluster | [default to null]
 **resource\_type** | [**List**](../Models/String.md)| Type of the resource to include | [default to null] [enum: ConfigMap, Secret, Service, Pod, Ingress, Certificate]
 **namespace** | **String**| searches for in the namespace | [optional] [default to tools]

### Return type

[**kubernetes.ListResourceInYamlOutput**](../Models/kubernetes.ListResourceInYamlOutput.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="logPod"></a>
# **logPod**
> String logPod(cluster\_name, cluster\_region, pod\_name, namespace, sinceSeconds, tailLines)

Shows the logs of the given pod in the (namespace, cluster, region)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cluster\_name** | **String**| Cluster name in which the pods are to be searched for | [default to null]
 **cluster\_region** | **String**| The region of the cluster | [default to null]
 **pod\_name** | **String**| Name of the pod | [default to null]
 **namespace** | **String**| searches for in the namespace | [optional] [default to tools]
 **sinceSeconds** | **Integer**| limits the logs to given seconds | [optional] [default to 86400]
 **tailLines** | **Integer**| limits the logs to given number of lines, counting from the lastest log line | [optional] [default to 1000]

### Return type

[**String**](../Models/string.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="toolDeleteFromLibrary"></a>
# **toolDeleteFromLibrary**
> List toolDeleteFromLibrary(Body)

Delete tools from supported library

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body** | [**TypesToolDeleteRequest**](../Models/TypesToolDeleteRequest.md)| Tools Delete Request Body |

### Return type

[**List**](../Models/types.AppDeleteRequest.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="toolInstallFromLibrary"></a>
# **toolInstallFromLibrary**
> v1.ConnectionResponse toolInstallFromLibrary(Body)

Install tools from the supported library

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body** | [**V1InstallCapsulesBody**](../Models/V1InstallCapsulesBody.md)| Tools Install Request Body |

### Return type

[**v1.ConnectionResponse**](../Models/v1.ConnectionResponse.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

