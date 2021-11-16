/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_HTTPArtifact = {
    properties: {
        headers: {
            type: 'array',
            contains: {
                type: 'v1alpha1_Header',
            },
        },
        url: {
            type: 'string',
        },
    },
};