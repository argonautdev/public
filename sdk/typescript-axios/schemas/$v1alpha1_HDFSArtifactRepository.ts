/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_HDFSArtifactRepository = {
    properties: {
        addresses: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        force: {
            type: 'boolean',
        },
        hdfsUser: {
            type: 'string',
        },
        krbCCacheSecret: {
            type: 'v1_SecretKeySelector',
        },
        krbConfigConfigMap: {
            type: 'v1_ConfigMapKeySelector',
        },
        krbKeytabSecret: {
            type: 'v1_SecretKeySelector',
        },
        krbRealm: {
            type: 'string',
        },
        krbServicePrincipalName: {
            type: 'string',
        },
        krbUsername: {
            type: 'string',
        },
        pathFormat: {
            type: 'string',
        },
    },
};