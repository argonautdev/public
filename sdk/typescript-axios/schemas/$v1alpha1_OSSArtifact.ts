/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_OSSArtifact = {
    properties: {
        accessKeySecret: {
            type: 'v1_SecretKeySelector',
        },
        bucket: {
            type: 'string',
        },
        createBucketIfNotPresent: {
            type: 'boolean',
        },
        endpoint: {
            type: 'string',
        },
        key: {
            type: 'string',
        },
        lifecycleRule: {
            type: 'v1alpha1_OSSLifecycleRule',
        },
        secretKeySecret: {
            type: 'v1_SecretKeySelector',
        },
        securityToken: {
            type: 'string',
        },
    },
};