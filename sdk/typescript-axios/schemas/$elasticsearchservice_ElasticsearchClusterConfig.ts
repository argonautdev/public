/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $elasticsearchservice_ElasticsearchClusterConfig = {
    properties: {
        ColdStorageOptions: {
            type: 'elasticsearchservice_ColdStorageOptions',
        },
        DedicatedMasterCount: {
            type: 'number',
        },
        DedicatedMasterEnabled: {
            type: 'boolean',
        },
        DedicatedMasterType: {
            type: 'string',
        },
        InstanceCount: {
            type: 'number',
        },
        InstanceType: {
            type: 'string',
        },
        WarmCount: {
            type: 'number',
        },
        WarmEnabled: {
            type: 'boolean',
        },
        WarmType: {
            type: 'string',
        },
        ZoneAwarenessConfig: {
            type: 'elasticsearchservice_ZoneAwarenessConfig',
        },
        ZoneAwarenessEnabled: {
            type: 'boolean',
        },
    },
};