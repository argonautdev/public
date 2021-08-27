/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $eks_RemoteAccessConfig = {
    properties: {
        Ec2SshKey: {
            type: 'string',
        },
        SourceSecurityGroups: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};