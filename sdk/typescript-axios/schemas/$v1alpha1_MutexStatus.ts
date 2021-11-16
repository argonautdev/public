/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_MutexStatus = {
    properties: {
        holding: {
            type: 'array',
            contains: {
                type: 'v1alpha1_MutexHolding',
            },
        },
        waiting: {
            type: 'array',
            contains: {
                type: 'v1alpha1_MutexHolding',
            },
        },
    },
};