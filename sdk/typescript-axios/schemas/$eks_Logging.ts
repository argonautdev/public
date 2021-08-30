/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $eks_Logging = {
    properties: {
        ClusterLogging: {
            type: 'array',
            contains: {
                type: 'eks_LogSetup',
            },
        },
    },
};