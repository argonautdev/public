/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_S3ArtifactRepository = {
    properties: {
        accessKeySecret: {
            type: 'v1_SecretKeySelector',
        },
        bucket: {
            type: 'string',
        },
        createBucketIfNotPresent: {
            type: 'v1alpha1_CreateS3BucketOptions',
        },
        encryptionOptions: {
            type: 'v1alpha1_S3EncryptionOptions',
        },
        endpoint: {
            type: 'string',
        },
        insecure: {
            type: 'boolean',
        },
        keyFormat: {
            type: 'string',
        },
        keyPrefix: {
            type: 'string',
        },
        region: {
            type: 'string',
        },
        roleARN: {
            type: 'string',
        },
        secretKeySecret: {
            type: 'v1_SecretKeySelector',
        },
        useSDKCreds: {
            type: 'boolean',
        },
    },
};