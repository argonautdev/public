# V1ArgoWorkflowApi

All URIs are relative to *https://midgard.argonaut.dev/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**argoWorkflowTrigger**](V1ArgoWorkflowApi.md#argoWorkflowTrigger) | **POST** /argo-workflows/trigger/{workflow} | Triggers an argo workflow


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

