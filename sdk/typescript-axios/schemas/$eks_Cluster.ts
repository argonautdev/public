/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $eks_Cluster = {
    properties: {
        Arn: {
            type: 'string',
        },
        CertificateAuthority: {
            type: 'eks_Certificate',
        },
        ClientRequestToken: {
            type: 'string',
        },
        CreatedAt: {
            type: 'string',
        },
        EncryptionConfig: {
            type: 'array',
            contains: {
                type: 'eks_EncryptionConfig',
            },
        },
        Endpoint: {
            type: 'string',
        },
        Identity: {
            type: 'eks_Identity',
        },
        KubernetesNetworkConfig: {
            type: 'eks_KubernetesNetworkConfigResponse',
        },
        Logging: {
            type: 'eks_Logging',
        },
        Name: {
            type: 'string',
        },
        PlatformVersion: {
            type: 'string',
        },
        ResourcesVpcConfig: {
            type: 'eks_VpcConfigResponse',
        },
        RoleArn: {
            type: 'string',
        },
        Status: {
            type: 'string',
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