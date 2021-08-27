/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_NodeSelectorTerm = {
    properties: {
        matchExpressions: {
            type: 'array',
            contains: {
                type: 'v1_NodeSelectorRequirement',
            },
        },
        matchFields: {
            type: 'array',
            contains: {
                type: 'v1_NodeSelectorRequirement',
            },
        },
    },
};