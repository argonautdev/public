/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_LabelSelector = {
    properties: {
        matchExpressions: {
            type: 'array',
            contains: {
                type: 'v1_LabelSelectorRequirement',
            },
        },
        matchLabels: {
            type: 'dictionary',
            contains: {
                type: 'string',
            },
        },
    },
};