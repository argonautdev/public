/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $capsules_InputClusterAutoScaler = {
    properties: {
        config: {
            type: 'capsules_ConfigClusterAutoScaler',
        },
        dependencies: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};