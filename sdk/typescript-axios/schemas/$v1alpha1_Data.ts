/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_Data = {
    properties: {
        source: {
            type: 'v1alpha1_DataSource',
        },
        transformation: {
            type: 'array',
            contains: {
                type: 'v1alpha1_TransformationStep',
            },
        },
    },
};