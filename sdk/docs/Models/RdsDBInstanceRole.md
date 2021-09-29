# RdsDBInstanceRole
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FeatureName** | [**String**](string.md) | The name of the feature associated with the AWS Identity and Access Management (IAM) role. For the list of supported feature names, see DBEngineVersion. | [optional] [default to null]
**RoleArn** | [**String**](string.md) | The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance. | [optional] [default to null]
**Status** | [**String**](string.md) | Describes the state of association between the IAM role and the DB instance. The Status property returns one of the following values:     * ACTIVE - the IAM role ARN is associated with the DB instance and can    be used to access other AWS services on your behalf.     * PENDING - the IAM role ARN is being associated with the DB instance.     * INVALID - the IAM role ARN is associated with the DB instance, but the    DB instance is unable to assume the IAM role in order to access other    AWS services on your behalf. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

