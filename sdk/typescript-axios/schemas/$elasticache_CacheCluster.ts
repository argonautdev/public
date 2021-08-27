/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $elasticache_CacheCluster = {
    properties: {
        ARN: {
            type: 'string',
        },
        AtRestEncryptionEnabled: {
            type: 'boolean',
        },
        AuthTokenEnabled: {
            type: 'boolean',
        },
        AuthTokenLastModifiedDate: {
            type: 'string',
        },
        AutoMinorVersionUpgrade: {
            type: 'boolean',
        },
        CacheClusterCreateTime: {
            type: 'string',
        },
        CacheClusterId: {
            type: 'string',
        },
        CacheClusterStatus: {
            type: 'string',
        },
        CacheNodeType: {
            type: 'string',
        },
        CacheNodes: {
            type: 'array',
            contains: {
                type: 'elasticache_CacheNode',
            },
        },
        CacheParameterGroup: {
            type: 'elasticache_CacheParameterGroupStatus',
        },
        CacheSecurityGroups: {
            type: 'array',
            contains: {
                type: 'elasticache_CacheSecurityGroupMembership',
            },
        },
        CacheSubnetGroupName: {
            type: 'string',
        },
        ClientDownloadLandingPage: {
            type: 'string',
        },
        ConfigurationEndpoint: {
            type: 'elasticache_Endpoint',
        },
        Engine: {
            type: 'string',
        },
        EngineVersion: {
            type: 'string',
        },
        LogDeliveryConfigurations: {
            type: 'array',
            contains: {
                type: 'elasticache_LogDeliveryConfiguration',
            },
        },
        NotificationConfiguration: {
            type: 'elasticache_NotificationConfiguration',
        },
        NumCacheNodes: {
            type: 'number',
        },
        PendingModifiedValues: {
            type: 'elasticache_PendingModifiedValues',
        },
        PreferredAvailabilityZone: {
            type: 'string',
        },
        PreferredMaintenanceWindow: {
            type: 'string',
        },
        PreferredOutpostArn: {
            type: 'string',
        },
        ReplicationGroupId: {
            type: 'string',
        },
        ReplicationGroupLogDeliveryEnabled: {
            type: 'boolean',
        },
        SecurityGroups: {
            type: 'array',
            contains: {
                type: 'elasticache_SecurityGroupMembership',
            },
        },
        SnapshotRetentionLimit: {
            type: 'number',
        },
        SnapshotWindow: {
            type: 'string',
        },
        TransitEncryptionEnabled: {
            type: 'boolean',
        },
    },
};