/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_SecretStruct = {
    properties: {
        Data: {
            type: 'dictionary',
            contains: {
                type: 'array',
                contains: {
                    type: 'number',
                },
            },
        },
        Manifest: {
            type: 'string',
        },
        Name: {
            type: 'string',
        },
        Namespace: {
            type: 'string',
        },
    },
};