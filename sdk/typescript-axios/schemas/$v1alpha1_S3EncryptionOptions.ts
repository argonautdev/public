/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_S3EncryptionOptions = {
    properties: {
        enableEncryption: {
            type: 'boolean',
        },
        kmsEncryptionContext: {
            type: 'string',
        },
        kmsKeyId: {
            type: 'string',
        },
        serverSideCustomerKeySecret: {
            type: 'v1_SecretKeySelector',
        },
    },
};