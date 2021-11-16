/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_Parameter = {
    properties: {
        default: {
            type: 'string',
        },
        enum: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        globalName: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        value: {
            type: 'string',
        },
        valueFrom: {
            type: 'v1alpha1_ValueFrom',
        },
    },
};