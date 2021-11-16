/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_Prometheus = {
    properties: {
        counter: {
            type: 'v1alpha1_Counter',
        },
        gauge: {
            type: 'v1alpha1_Gauge',
        },
        help: {
            type: 'string',
        },
        histogram: {
            type: 'v1alpha1_Histogram',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'v1alpha1_MetricLabel',
            },
        },
        name: {
            type: 'string',
        },
        when: {
            type: 'string',
        },
    },
};