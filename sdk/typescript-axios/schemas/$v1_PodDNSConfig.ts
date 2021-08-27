/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_PodDNSConfig = {
    properties: {
        nameservers: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        options: {
            type: 'array',
            contains: {
                type: 'v1_PodDNSConfigOption',
            },
        },
        searches: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};