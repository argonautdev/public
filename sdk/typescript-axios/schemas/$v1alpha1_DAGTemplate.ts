/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_DAGTemplate = {
    properties: {
        failFast: {
            type: 'boolean',
        },
        target: {
            type: 'string',
        },
        tasks: {
            type: 'array',
            contains: {
                type: 'v1alpha1_DAGTask',
            },
        },
    },
};