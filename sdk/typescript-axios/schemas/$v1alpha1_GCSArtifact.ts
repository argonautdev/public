/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_GCSArtifact = {
    properties: {
        bucket: {
            type: 'string',
        },
        key: {
            type: 'string',
        },
        serviceAccountKeySecret: {
            type: 'v1_SecretKeySelector',
        },
    },
};