# V1KubernetesApi

All URIs are relative to *http://localhost:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**kubernetesApiCaller**](V1KubernetesApi.md#kubernetesApiCaller) | **GET** /cluster/{cluster}/region/{region}/kubernetes/{url} | Wrapper around k8s api to make calls


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

