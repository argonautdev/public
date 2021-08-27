/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_SecretVolumeSource = {
    properties: {
        defaultMode: {
            type: 'number',
        },
        items: {
            type: 'array',
            contains: {
                type: 'v1_KeyToPath',
            },
        },
        optional: {
            type: 'boolean',
        },
        secretName: {
            type: 'string',
        },
    },
};