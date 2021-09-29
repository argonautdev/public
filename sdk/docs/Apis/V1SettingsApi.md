# V1SettingsApi

All URIs are relative to *http://localhost:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**setAWSCreds**](V1SettingsApi.md#setAWSCreds) | **PUT** /aws-creds/set | Updates the aws creds with the new credentails


<a name="setAWSCreds"></a>
# **setAWSCreds**
> String setAWSCreds(Body)

Updates the aws creds with the new credentails

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body** | [**AwsCredsSetAWSBody**](../Models/AwsCredsSetAWSBody.md)| Body of the aws creds |

### Return type

[**String**](../Models/string.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

