/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_CephFSVolumeSource = {
    properties: {
        monitors: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        path: {
            type: 'string',
        },
        readOnly: {
            type: 'boolean',
        },
        secretFile: {
            type: 'string',
        },
        secretRef: {
            type: 'v1_LocalObjectReference',
        },
        user: {
            type: 'string',
        },
    },
};