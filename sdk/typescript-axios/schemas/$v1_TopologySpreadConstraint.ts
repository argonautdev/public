/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_TopologySpreadConstraint = {
    properties: {
        labelSelector: {
            type: 'v1_LabelSelector',
        },
        maxSkew: {
            type: 'number',
        },
        topologyKey: {
            type: 'string',
        },
        whenUnsatisfiable: {
            type: 'string',
        },
    },
};