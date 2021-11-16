/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_GitArtifact = {
    properties: {
        depth: {
            type: 'number',
        },
        disableSubmodules: {
            type: 'boolean',
        },
        fetch: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        insecureIgnoreHostKey: {
            type: 'boolean',
        },
        passwordSecret: {
            type: 'v1_SecretKeySelector',
        },
        repo: {
            type: 'string',
        },
        revision: {
            type: 'string',
        },
        sshPrivateKeySecret: {
            type: 'v1_SecretKeySelector',
        },
        usernameSecret: {
            type: 'v1_SecretKeySelector',
        },
    },
};