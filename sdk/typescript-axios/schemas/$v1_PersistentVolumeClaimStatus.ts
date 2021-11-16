/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_PersistentVolumeClaimStatus = {
    properties: {
        accessModes: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        capacity: {
            type: 'v1_ResourceList',
        },
        conditions: {
            type: 'array',
            contains: {
                type: 'v1_PersistentVolumeClaimCondition',
            },
        },
        phase: {
            type: 'string',
        },
    },
};