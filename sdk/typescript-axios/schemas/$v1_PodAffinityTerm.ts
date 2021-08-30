/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_PodAffinityTerm = {
    properties: {
        labelSelector: {
            type: 'v1_LabelSelector',
        },
        namespaceSelector: {
            type: 'v1_LabelSelector',
        },
        namespaces: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        topologyKey: {
            type: 'string',
        },
    },
};