/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_HTTP = {
    properties: {
        body: {
            type: 'string',
        },
        headers: {
            type: 'array',
            contains: {
                type: 'v1alpha1_HTTPHeader',
            },
        },
        method: {
            type: 'string',
        },
        timeoutSeconds: {
            type: 'number',
        },
        url: {
            type: 'string',
        },
    },
};