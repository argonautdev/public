/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $capsules_InputPrometheus = {
    properties: {
        config: {
            type: 'capsules_ConfigPrometheus',
        },
        dependencies: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};