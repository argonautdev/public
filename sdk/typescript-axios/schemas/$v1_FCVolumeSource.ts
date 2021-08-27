/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_FCVolumeSource = {
    properties: {
        fsType: {
            type: 'string',
        },
        lun: {
            type: 'number',
        },
        readOnly: {
            type: 'boolean',
        },
        targetWWNs: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        wwids: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};