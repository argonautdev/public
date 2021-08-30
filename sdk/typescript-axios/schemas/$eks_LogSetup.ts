/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $eks_LogSetup = {
    properties: {
        Enabled: {
            type: 'boolean',
        },
        Types: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};