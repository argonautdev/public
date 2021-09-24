# GithubApi

All URIs are relative to *http://localhost:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGhInstallations**](GithubApi.md#getGhInstallations) | **GET** /getGhInstallations | Get all the github installations associated with the current argonaut organization


<a name="getGhInstallations"></a>
# **getGhInstallations**
> List getGhInstallations()

Get all the github installations associated with the current argonaut organization

    Get all the github installations associated with the current argonaut organization.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/models.GhInstallation.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

