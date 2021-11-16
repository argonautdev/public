/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_SemaphoreHolding = {
    properties: {
        holders: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        semaphore: {
            type: 'string',
        },
    },
};