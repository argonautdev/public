/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $eks_NodegroupResources = {
    properties: {
        AutoScalingGroups: {
            type: 'array',
            contains: {
                type: 'eks_AutoScalingGroup',
            },
        },
        RemoteAccessSecurityGroup: {
            type: 'string',
        },
    },
};