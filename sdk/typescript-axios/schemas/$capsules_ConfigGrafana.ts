/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $capsules_ConfigGrafana = {
    properties: {
        accessKeyId: {
            type: 'string',
        },
        accessKeyIdBase64: {
            type: 'string',
        },
        domainName: {
            type: 'string',
            isRequired: true,
        },
        email: {
            type: 'string',
        },
        password: {
            type: 'string',
            isRequired: true,
        },
        s3Bucket: {
            type: 'string',
            isRequired: true,
        },
        s3region: {
            type: 'string',
            isRequired: true,
        },
        secretAccessKey: {
            type: 'string',
        },
        secretAccessKeyBase64: {
            type: 'string',
        },
        username: {
            type: 'string',
            isRequired: true,
        },
    },
};