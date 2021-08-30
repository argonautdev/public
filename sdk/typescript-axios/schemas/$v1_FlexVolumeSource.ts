/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_FlexVolumeSource = {
    properties: {
        driver: {
            type: 'string',
        },
        fsType: {
            type: 'string',
        },
        options: {
            type: 'dictionary',
            contains: {
                type: 'string',
            },
        },
        readOnly: {
            type: 'boolean',
        },
        secretRef: {
            type: 'v1_LocalObjectReference',
        },
    },
};