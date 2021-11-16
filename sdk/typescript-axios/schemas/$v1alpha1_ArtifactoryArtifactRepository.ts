/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_ArtifactoryArtifactRepository = {
    properties: {
        passwordSecret: {
            type: 'v1_SecretKeySelector',
        },
        repoURL: {
            type: 'string',
        },
        usernameSecret: {
            type: 'v1_SecretKeySelector',
        },
    },
};