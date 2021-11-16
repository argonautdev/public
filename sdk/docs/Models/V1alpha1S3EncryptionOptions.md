# V1alpha1S3EncryptionOptions
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enableEncryption** | [**Boolean**](boolean.md) | EnableEncryption tells the driver to encrypt objects if set to true. If kmsKeyId and serverSideCustomerKeySecret are not set, SSE-S3 will be used | [optional] [default to null]
**kmsEncryptionContext** | [**String**](string.md) | KmsEncryptionContext is a json blob that contains an encryption context. See https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context for more information | [optional] [default to null]
**kmsKeyId** | [**String**](string.md) | KMSKeyId tells the driver to encrypt the object using the specified KMS Key. | [optional] [default to null]
**serverSideCustomerKeySecret** | [**v1.SecretKeySelector**](v1.SecretKeySelector.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

