/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $rds_DBInstance = {
    properties: {
        AllocatedStorage: {
            type: 'number',
        },
        AssociatedRoles: {
            type: 'array',
            contains: {
                type: 'rds_DBInstanceRole',
            },
        },
        AutoMinorVersionUpgrade: {
            type: 'boolean',
        },
        AvailabilityZone: {
            type: 'string',
        },
        AwsBackupRecoveryPointArn: {
            type: 'string',
        },
        BackupRetentionPeriod: {
            type: 'number',
        },
        CACertificateIdentifier: {
            type: 'string',
        },
        CharacterSetName: {
            type: 'string',
        },
        CopyTagsToSnapshot: {
            type: 'boolean',
        },
        CustomerOwnedIpEnabled: {
            type: 'boolean',
        },
        DBClusterIdentifier: {
            type: 'string',
        },
        DBInstanceArn: {
            type: 'string',
        },
        DBInstanceAutomatedBackupsReplications: {
            type: 'array',
            contains: {
                type: 'rds_DBInstanceAutomatedBackupsReplication',
            },
        },
        DBInstanceClass: {
            type: 'string',
        },
        DBInstanceIdentifier: {
            type: 'string',
        },
        DBInstanceStatus: {
            type: 'string',
        },
        DBName: {
            type: 'string',
        },
        DBParameterGroups: {
            type: 'array',
            contains: {
                type: 'rds_DBParameterGroupStatus',
            },
        },
        DBSecurityGroups: {
            type: 'array',
            contains: {
                type: 'rds_DBSecurityGroupMembership',
            },
        },
        DBSubnetGroup: {
            type: 'rds_DBSubnetGroup',
        },
        DbInstancePort: {
            type: 'number',
        },
        DbiResourceId: {
            type: 'string',
        },
        DeletionProtection: {
            type: 'boolean',
        },
        DomainMemberships: {
            type: 'array',
            contains: {
                type: 'rds_DomainMembership',
            },
        },
        EnabledCloudwatchLogsExports: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        Endpoint: {
            type: 'rds_Endpoint',
        },
        Engine: {
            type: 'string',
        },
        EngineVersion: {
            type: 'string',
        },
        EnhancedMonitoringResourceArn: {
            type: 'string',
        },
        IAMDatabaseAuthenticationEnabled: {
            type: 'boolean',
        },
        InstanceCreateTime: {
            type: 'string',
        },
        Iops: {
            type: 'number',
        },
        KmsKeyId: {
            type: 'string',
        },
        LatestRestorableTime: {
            type: 'string',
        },
        LicenseModel: {
            type: 'string',
        },
        ListenerEndpoint: {
            type: 'rds_Endpoint',
        },
        MasterUsername: {
            type: 'string',
        },
        MaxAllocatedStorage: {
            type: 'number',
        },
        MonitoringInterval: {
            type: 'number',
        },
        MonitoringRoleArn: {
            type: 'string',
        },
        MultiAZ: {
            type: 'boolean',
        },
        NcharCharacterSetName: {
            type: 'string',
        },
        OptionGroupMemberships: {
            type: 'array',
            contains: {
                type: 'rds_OptionGroupMembership',
            },
        },
        PendingModifiedValues: {
            type: 'rds_PendingModifiedValues',
        },
        PerformanceInsightsEnabled: {
            type: 'boolean',
        },
        PerformanceInsightsKMSKeyId: {
            type: 'string',
        },
        PerformanceInsightsRetentionPeriod: {
            type: 'number',
        },
        PreferredBackupWindow: {
            type: 'string',
        },
        PreferredMaintenanceWindow: {
            type: 'string',
        },
        ProcessorFeatures: {
            type: 'array',
            contains: {
                type: 'rds_ProcessorFeature',
            },
        },
        PromotionTier: {
            type: 'number',
        },
        PubliclyAccessible: {
            type: 'boolean',
        },
        ReadReplicaDBClusterIdentifiers: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        ReadReplicaDBInstanceIdentifiers: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        ReadReplicaSourceDBInstanceIdentifier: {
            type: 'string',
        },
        ReplicaMode: {
            type: 'string',
        },
        SecondaryAvailabilityZone: {
            type: 'string',
        },
        StatusInfos: {
            type: 'array',
            contains: {
                type: 'rds_DBInstanceStatusInfo',
            },
        },
        StorageEncrypted: {
            type: 'boolean',
        },
        StorageType: {
            type: 'string',
        },
        TagList: {
            type: 'array',
            contains: {
                type: 'rds_Tag',
            },
        },
        TdeCredentialArn: {
            type: 'string',
        },
        Timezone: {
            type: 'string',
        },
        VpcSecurityGroups: {
            type: 'array',
            contains: {
                type: 'rds_VpcSecurityGroupMembership',
            },
        },
    },
};