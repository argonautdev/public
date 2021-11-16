# V1alpha1OSSArtifactRepository
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessKeySecret** | [**v1.SecretKeySelector**](v1.SecretKeySelector.md) |  | [optional] [default to null]
**bucket** | [**String**](string.md) | Bucket is the name of the bucket | [optional] [default to null]
**createBucketIfNotPresent** | [**Boolean**](boolean.md) | CreateBucketIfNotPresent tells the driver to attempt to create the OSS bucket for output artifacts, if it doesn&#39;t exist | [optional] [default to null]
**endpoint** | [**String**](string.md) | Endpoint is the hostname of the bucket endpoint | [optional] [default to null]
**keyFormat** | [**String**](string.md) | KeyFormat is defines the format of how to store keys. Can reference workflow variables | [optional] [default to null]
**lifecycleRule** | [**v1alpha1.OSSLifecycleRule**](v1alpha1.OSSLifecycleRule.md) |  | [optional] [default to null]
**secretKeySecret** | [**v1.SecretKeySelector**](v1.SecretKeySelector.md) |  | [optional] [default to null]
**securityToken** | [**String**](string.md) | SecurityToken is the user&#39;s temporary security token. For more details, check out: https://www.alibabacloud.com/help/doc-detail/100624.htm | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

