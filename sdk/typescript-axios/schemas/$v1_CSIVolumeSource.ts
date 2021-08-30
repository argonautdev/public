/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_CSIVolumeSource = {
    properties: {
        driver: {
            type: 'string',
        },
        fsType: {
            type: 'string',
        },
        nodePublishSecretRef: {
            type: 'v1_LocalObjectReference',
        },
        readOnly: {
            type: 'boolean',
        },
        volumeAttributes: {
            type: 'dictionary',
            contains: {
                type: 'string',
            },
        },
    },
};