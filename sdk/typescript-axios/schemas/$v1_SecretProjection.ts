/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_SecretProjection = {
    properties: {
        items: {
            type: 'array',
            contains: {
                type: 'v1_KeyToPath',
            },
        },
        name: {
            type: 'string',
        },
        optional: {
            type: 'boolean',
        },
    },
};