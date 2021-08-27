/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $elasticache_CacheParameterGroupStatus = {
    properties: {
        CacheNodeIdsToReboot: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        CacheParameterGroupName: {
            type: 'string',
        },
        ParameterApplyStatus: {
            type: 'string',
        },
    },
};