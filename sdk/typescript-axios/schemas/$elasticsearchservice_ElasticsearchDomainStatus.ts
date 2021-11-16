/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $elasticsearchservice_ElasticsearchDomainStatus = {
    properties: {
        ARN: {
            type: 'string',
        },
        AccessPolicies: {
            type: 'string',
        },
        AdvancedOptions: {
            type: 'dictionary',
            contains: {
                type: 'string',
            },
        },
        AdvancedSecurityOptions: {
            type: 'elasticsearchservice_AdvancedSecurityOptions',
        },
        CognitoOptions: {
            type: 'elasticsearchservice_CognitoOptions',
        },
        Created: {
            type: 'boolean',
        },
        Deleted: {
            type: 'boolean',
        },
        DomainEndpointOptions: {
            type: 'elasticsearchservice_DomainEndpointOptions',
        },
        DomainId: {
            type: 'string',
        },
        DomainName: {
            type: 'string',
        },
        EBSOptions: {
            type: 'elasticsearchservice_EBSOptions',
        },
        ElasticsearchClusterConfig: {
            type: 'elasticsearchservice_ElasticsearchClusterConfig',
        },
        ElasticsearchVersion: {
            type: 'string',
        },
        EncryptionAtRestOptions: {
            type: 'elasticsearchservice_EncryptionAtRestOptions',
        },
        Endpoint: {
            type: 'string',
        },
        Endpoints: {
            type: 'dictionary',
            contains: {
                type: 'string',
            },
        },
        LogPublishingOptions: {
            type: 'dictionary',
            contains: {
                type: 'elasticsearchservice_LogPublishingOption',
            },
        },
        NodeToNodeEncryptionOptions: {
            type: 'elasticsearchservice_NodeToNodeEncryptionOptions',
        },
        Processing: {
            type: 'boolean',
        },
        ServiceSoftwareOptions: {
            type: 'elasticsearchservice_ServiceSoftwareOptions',
        },
        SnapshotOptions: {
            type: 'elasticsearchservice_SnapshotOptions',
        },
        UpgradeProcessing: {
            type: 'boolean',
        },
        VPCOptions: {
            type: 'elasticsearchservice_VPCDerivedInfo',
        },
    },
};