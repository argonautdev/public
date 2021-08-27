/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_RBDVolumeSource = {
    properties: {
        fsType: {
            type: 'string',
        },
        image: {
            type: 'string',
        },
        keyring: {
            type: 'string',
        },
        monitors: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        pool: {
            type: 'string',
        },
        readOnly: {
            type: 'boolean',
        },
        secretRef: {
            type: 'v1_LocalObjectReference',
        },
        user: {
            type: 'string',
        },
    },
};