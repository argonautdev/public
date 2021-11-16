/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_Histogram = {
    properties: {
        buckets: {
            type: 'array',
            contains: {
                type: 'v1alpha1_Amount',
            },
        },
        value: {
            type: 'string',
        },
    },
};