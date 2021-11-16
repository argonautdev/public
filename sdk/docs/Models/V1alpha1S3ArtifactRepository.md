# V1alpha1S3ArtifactRepository
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessKeySecret** | [**v1.SecretKeySelector**](v1.SecretKeySelector.md) |  | [optional] [default to null]
**bucket** | [**String**](string.md) | Bucket is the name of the bucket | [optional] [default to null]
**createBucketIfNotPresent** | [**v1alpha1.CreateS3BucketOptions**](v1alpha1.CreateS3BucketOptions.md) |  | [optional] [default to null]
**encryptionOptions** | [**v1alpha1.S3EncryptionOptions**](v1alpha1.S3EncryptionOptions.md) |  | [optional] [default to null]
**endpoint** | [**String**](string.md) | Endpoint is the hostname of the bucket endpoint | [optional] [default to null]
**insecure** | [**Boolean**](boolean.md) | Insecure will connect to the service with TLS | [optional] [default to null]
**keyFormat** | [**String**](string.md) | KeyFormat is defines the format of how to store keys. Can reference workflow variables | [optional] [default to null]
**keyPrefix** | [**String**](string.md) | KeyPrefix is prefix used as part of the bucket key in which the controller will store artifacts. DEPRECATED. Use KeyFormat instead | [optional] [default to null]
**region** | [**String**](string.md) | Region contains the optional bucket region | [optional] [default to null]
**roleARN** | [**String**](string.md) | RoleARN is the Amazon Resource Name (ARN) of the role to assume. | [optional] [default to null]
**secretKeySecret** | [**v1.SecretKeySelector**](v1.SecretKeySelector.md) |  | [optional] [default to null]
**useSDKCreds** | [**Boolean**](boolean.md) | UseSDKCreds tells the driver to figure out credentials based on sdk defaults. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

