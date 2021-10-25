/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $elasticsearchservice_VPCDerivedInfo = {
    properties: {
        AvailabilityZones: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        SecurityGroupIds: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        SubnetIds: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        VPCId: {
            type: 'string',
        },
    },
};