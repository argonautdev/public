/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_Outputs = {
    properties: {
        artifacts: {
            type: 'array',
            contains: {
                type: 'v1alpha1_Artifact',
            },
        },
        exitCode: {
            type: 'string',
        },
        parameters: {
            type: 'array',
            contains: {
                type: 'v1alpha1_Parameter',
            },
        },
        result: {
            type: 'string',
        },
    },
};