/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $eks_VpcConfigResponse = {
    properties: {
        ClusterSecurityGroupId: {
            type: 'string',
        },
        EndpointPrivateAccess: {
            type: 'boolean',
        },
        EndpointPublicAccess: {
            type: 'boolean',
        },
        PublicAccessCidrs: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        SecurityGroupIds: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        SubnetIds: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        VpcId: {
            type: 'string',
        },
    },
};