/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_StorageOSVolumeSource = {
    properties: {
        fsType: {
            type: 'string',
        },
        readOnly: {
            type: 'boolean',
        },
        secretRef: {
            type: 'v1_LocalObjectReference',
        },
        volumeName: {
            type: 'string',
        },
        volumeNamespace: {
            type: 'string',
        },
    },
};