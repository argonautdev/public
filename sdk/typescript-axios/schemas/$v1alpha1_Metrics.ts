/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_Metrics = {
    properties: {
        prometheus: {
            type: 'array',
            contains: {
                type: 'v1alpha1_Prometheus',
            },
        },
    },
};