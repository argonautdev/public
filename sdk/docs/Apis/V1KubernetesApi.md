# V1KubernetesApi

All URIs are relative to *http://localhost:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**kubernetesApiCaller**](V1KubernetesApi.md#kubernetesApiCaller) | **GET** /cluster/{cluster}/region/{region}/kubernetes/{url} | Wrapper around k8s api to make calls
[**kubernetesConfigMap**](V1KubernetesApi.md#kubernetesConfigMap) | **GET** /cluster/{cluster}/region/{region}/namespaces/{namespace}/configmaps/{name} | KubernetesConfigMap returns a config-map
[**kubernetesSecret**](V1KubernetesApi.md#kubernetesSecret) | **GET** /cluster/{cluster}/region/{region}/namespaces/{namespace}/secrets/{name} | KubernetesSecret returns a config-map


<a name="kubernetesApiCaller"></a>
# **kubernetesApiCaller**
> Object kubernetesApiCaller(cluster, region, url)

Wrapper around k8s api to make calls

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cluster** | **String**| Cluster name | [default to null]
 **region** | **String**| The region of the cluster | [default to null]
 **url** | **String**| Url to send request to k8s | [default to null]

### Return type

[**Object**](../Models/object.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="kubernetesConfigMap"></a>
# **kubernetesConfigMap**
> v1.ConfigMap kubernetesConfigMap(cluster, region, namespace, name)

KubernetesConfigMap returns a config-map

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cluster** | **String**| Cluster name | [default to null]
 **region** | **String**| The region of the cluster | [default to null]
 **namespace** | **String**| Namespace | [default to null]
 **name** | **String**| Config Map Name | [default to null]

### Return type

[**v1.ConfigMap**](../Models/v1.ConfigMap.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="kubernetesSecret"></a>
# **kubernetesSecret**
> v1.Secret kubernetesSecret(cluster, region, namespace, name)

KubernetesSecret returns a config-map

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cluster** | **String**| Cluster name | [default to null]
 **region** | **String**| The region of the cluster | [default to null]
 **namespace** | **String**| Namespace | [default to null]
 **name** | **String**| Secret name | [default to null]

### Return type

[**v1.Secret**](../Models/v1.Secret.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

