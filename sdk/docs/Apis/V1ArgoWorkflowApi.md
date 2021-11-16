# V1ArgoWorkflowApi

All URIs are relative to *https://midgard.argonaut.dev/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**argoWorkflowList**](V1ArgoWorkflowApi.md#argoWorkflowList) | **GET** /argo-workflows/list | Lists all the workflows allowed with description
[**argoWorkflowListTriggered**](V1ArgoWorkflowApi.md#argoWorkflowListTriggered) | **GET** /argo-workflows/list-triggered | Lists all the triggered workflows
[**argoWorkflowTrigger**](V1ArgoWorkflowApi.md#argoWorkflowTrigger) | **POST** /argo-workflows/trigger/{workflow} | Triggers an argo workflow


<a name="argoWorkflowList"></a>
# **argoWorkflowList**
> v1.ArgoWorkflowsDescriptions argoWorkflowList()

Lists all the workflows allowed with description

### Parameters
This endpoint does not need any parameter.

### Return type

[**v1.ArgoWorkflowsDescriptions**](../Models/v1.ArgoWorkflowsDescriptions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="argoWorkflowListTriggered"></a>
# **argoWorkflowListTriggered**
> v1.ArgoWorkflowListTriggeredOutput argoWorkflowListTriggered()

Lists all the triggered workflows

### Parameters
This endpoint does not need any parameter.

### Return type

[**v1.ArgoWorkflowListTriggeredOutput**](../Models/v1.ArgoWorkflowListTriggeredOutput.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="argoWorkflowTrigger"></a>
# **argoWorkflowTrigger**
> String argoWorkflowTrigger(workflow, Body)

Triggers an argo workflow

    Creates an argo workflow in the argo workflow cluster, the inputs are passed in body as a key value pair The workflow defined in the path is invoked. Template is parsed in workflow itself and will fail if there are missing variables

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow** | **String**| The name of the workflow to be triggered | [default to null]
 **Body** | **Object**| The config for popualting the workflow template |

### Return type

[**String**](../Models/string.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

