/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $rds_PendingModifiedValues = {
    properties: {
        AllocatedStorage: {
            type: 'number',
        },
        BackupRetentionPeriod: {
            type: 'number',
        },
        CACertificateIdentifier: {
            type: 'string',
        },
        DBInstanceClass: {
            type: 'string',
        },
        DBInstanceIdentifier: {
            type: 'string',
        },
        DBSubnetGroupName: {
            type: 'string',
        },
        EngineVersion: {
            type: 'string',
        },
        IAMDatabaseAuthenticationEnabled: {
            type: 'boolean',
        },
        Iops: {
            type: 'number',
        },
        LicenseModel: {
            type: 'string',
        },
        MasterUserPassword: {
            type: 'string',
        },
        MultiAZ: {
            type: 'boolean',
        },
        PendingCloudwatchLogsExports: {
            type: 'rds_PendingCloudwatchLogsExports',
        },
        Port: {
            type: 'number',
        },
        ProcessorFeatures: {
            type: 'array',
            contains: {
                type: 'rds_ProcessorFeature',
            },
        },
        StorageType: {
            type: 'string',
        },
    },
};