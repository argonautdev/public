/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_ISCSIVolumeSource = {
    properties: {
        chapAuthDiscovery: {
            type: 'boolean',
        },
        chapAuthSession: {
            type: 'boolean',
        },
        fsType: {
            type: 'string',
        },
        initiatorName: {
            type: 'string',
        },
        iqn: {
            type: 'string',
        },
        iscsiInterface: {
            type: 'string',
        },
        lun: {
            type: 'number',
        },
        portals: {
            type: 'array',
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
        targetPortal: {
            type: 'string',
        },
    },
};