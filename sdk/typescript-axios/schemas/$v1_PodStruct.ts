/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_PodStruct = {
    properties: {
        Conditions: {
            type: 'array',
            contains: {
                type: 'v1_PodCondition',
            },
        },
        Image: {
            type: 'string',
        },
        ImageTag: {
            type: 'string',
        },
        Manifest: {
            type: 'string',
        },
        Name: {
            type: 'string',
        },
        Namespace: {
            type: 'string',
        },
        Ready: {
            type: 'string',
        },
        StartTime: {
            type: 'number',
        },
        Status: {
            type: 'string',
        },
    },
};