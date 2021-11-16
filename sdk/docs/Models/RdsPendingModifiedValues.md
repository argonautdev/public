# RdsPendingModifiedValues
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllocatedStorage** | [**Integer**](integer.md) | The allocated storage size for the DB instance specified in gibibytes . | [optional] [default to null]
**BackupRetentionPeriod** | [**Integer**](integer.md) | The number of days for which automated backups are retained. | [optional] [default to null]
**CACertificateIdentifier** | [**String**](string.md) | The identifier of the CA certificate for the DB instance. | [optional] [default to null]
**DBInstanceClass** | [**String**](string.md) | The name of the compute and memory capacity class for the DB instance. | [optional] [default to null]
**DBInstanceIdentifier** | [**String**](string.md) | The database identifier for the DB instance. | [optional] [default to null]
**DBSubnetGroupName** | [**String**](string.md) | The DB subnet group for the DB instance. | [optional] [default to null]
**EngineVersion** | [**String**](string.md) | The database engine version. | [optional] [default to null]
**IAMDatabaseAuthenticationEnabled** | [**Boolean**](boolean.md) | Whether mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled. | [optional] [default to null]
**Iops** | [**Integer**](integer.md) | The Provisioned IOPS value for the DB instance. | [optional] [default to null]
**LicenseModel** | [**String**](string.md) | The license model for the DB instance.  Valid values: license-included | bring-your-own-license | general-public-license | [optional] [default to null]
**MasterUserPassword** | [**String**](string.md) | The master credentials for the DB instance. | [optional] [default to null]
**MultiAZ** | [**Boolean**](boolean.md) | A value that indicates that the Single-AZ DB instance will change to a Multi-AZ deployment. | [optional] [default to null]
**PendingCloudwatchLogsExports** | [**rds.PendingCloudwatchLogsExports**](rds.PendingCloudwatchLogsExports.md) |  | [optional] [default to null]
**Port** | [**Integer**](integer.md) | The port for the DB instance. | [optional] [default to null]
**ProcessorFeatures** | [**List**](rds.ProcessorFeature.md) | The number of CPU cores and the number of threads per core for the DB instance class of the DB instance. | [optional] [default to null]
**StorageType** | [**String**](string.md) | The storage type of the DB instance. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

