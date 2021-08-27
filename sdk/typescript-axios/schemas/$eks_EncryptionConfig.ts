/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $eks_EncryptionConfig = {
    properties: {
        Provider: {
            type: 'eks_Provider',
        },
        Resources: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};