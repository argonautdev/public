/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_ConfigMapStruct = {
    properties: {
        CreatedAt: {
            type: 'number',
        },
        Data: {
            type: 'dictionary',
            contains: {
                type: 'string',
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