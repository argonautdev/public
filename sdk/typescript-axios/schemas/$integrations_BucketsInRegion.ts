/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $integrations_BucketsInRegion = {
    properties: {
        Buckets: {
            type: 'array',
            contains: {
                type: 's3_Bucket',
            },
        },
        Owner: {
            type: 's3_Owner',
        },
        Region: {
            type: 'string',
        },
    },
};