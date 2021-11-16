/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $eks_Nodegroup = {
    properties: {
        AmiType: {
            type: 'string',
        },
        CapacityType: {
            type: 'string',
        },
        ClusterName: {
            type: 'string',
        },
        CreatedAt: {
            type: 'string',
        },
        DiskSize: {
            type: 'number',
        },
        Health: {
            type: 'eks_NodegroupHealth',
        },
        InstanceTypes: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        Labels: {
            type: 'dictionary',
            contains: {
                type: 'string',
            },
        },
        LaunchTemplate: {
            type: 'eks_LaunchTemplateSpecification',
        },
        ModifiedAt: {
            type: 'string',
        },
        NodeRole: {
            type: 'string',
        },
        NodegroupArn: {
            type: 'string',
        },
        NodegroupName: {
            type: 'string',
        },
        ReleaseVersion: {
            type: 'string',
        },
        RemoteAccess: {
            type: 'eks_RemoteAccessConfig',
        },
        Resources: {
            type: 'eks_NodegroupResources',
        },
        ScalingConfig: {
            type: 'eks_NodegroupScalingConfig',
        },
        Status: {
            type: 'string',
        },
        Subnets: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        Tags: {
            type: 'dictionary',
            contains: {
                type: 'string',
            },
        },
        Version: {
            type: 'string',
        },
    },
};