/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_Arguments = {
    properties: {
        artifacts: {
            type: 'array',
            contains: {
                type: 'v1alpha1_Artifact',
            },
        },
        parameters: {
            type: 'array',
            contains: {
                type: 'v1alpha1_Parameter',
            },
        },
    },
};