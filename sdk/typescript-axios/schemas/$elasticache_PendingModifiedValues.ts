/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $elasticache_PendingModifiedValues = {
    properties: {
        AuthTokenStatus: {
            type: 'string',
        },
        CacheNodeIdsToRemove: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        CacheNodeType: {
            type: 'string',
        },
        EngineVersion: {
            type: 'string',
        },
        LogDeliveryConfigurations: {
            type: 'array',
            contains: {
                type: 'elasticache_PendingLogDeliveryConfiguration',
            },
        },
        NumCacheNodes: {
            type: 'number',
        },
    },
};