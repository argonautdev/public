/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_RetryStrategy = {
    properties: {
        affinity: {
            type: 'v1alpha1_RetryAffinity',
        },
        backoff: {
            type: 'v1alpha1_Backoff',
        },
        expression: {
            type: 'string',
        },
        limit: {
            type: 'intstr_IntOrString',
        },
        retryPolicy: {
            type: 'string',
        },
    },
};