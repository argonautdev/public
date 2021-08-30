/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_HTTPGetAction = {
    properties: {
        host: {
            type: 'string',
        },
        httpHeaders: {
            type: 'array',
            contains: {
                type: 'v1_HTTPHeader',
            },
        },
        path: {
            type: 'string',
        },
        port: {
            type: 'intstr_IntOrString',
        },
        scheme: {
            type: 'string',
        },
    },
};