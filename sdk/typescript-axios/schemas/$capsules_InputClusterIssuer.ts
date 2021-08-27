/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $capsules_InputClusterIssuer = {
    properties: {
        config: {
            type: 'capsules_ConfigClusterIssuer',
        },
        dependencies: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};