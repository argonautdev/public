/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $integrations_DescribeClusterOutput = {
    properties: {
        Cluster: {
            type: 'eks_Cluster',
        },
        Nodegroups: {
            type: 'array',
            contains: {
                type: 'eks_Nodegroup',
            },
        },
        region: {
            type: 'string',
        },
    },
};