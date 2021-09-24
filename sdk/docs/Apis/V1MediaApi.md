# V1MediaApi

All URIs are relative to *https://midgard.argonaut.dev/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mediaDownload**](V1MediaApi.md#mediaDownload) | **GET** /media/download/{path} | Download media file at the given path


<a name="mediaDownload"></a>
# **mediaDownload**
> String mediaDownload(path)

Download media file at the given path

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Path of the file to download in the media/ folder | [default to null]

### Return type

[**String**](../Models/string.md)

### Authorization

[JWTKeyAuth](../README.md#JWTKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain

