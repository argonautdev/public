/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_SemaphoreStatus = {
    properties: {
        holding: {
            type: 'array',
            contains: {
                type: 'v1alpha1_SemaphoreHolding',
            },
        },
        waiting: {
            type: 'array',
            contains: {
                type: 'v1alpha1_SemaphoreHolding',
            },
        },
    },
};