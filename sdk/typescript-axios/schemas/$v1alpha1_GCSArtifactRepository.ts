/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_GCSArtifactRepository = {
    properties: {
        bucket: {
            type: 'string',
        },
        keyFormat: {
            type: 'string',
        },
        serviceAccountKeySecret: {
            type: 'v1_SecretKeySelector',
        },
    },
};