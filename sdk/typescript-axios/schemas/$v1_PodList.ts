/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_PodList = {
    properties: {
        apiVersion: {
            type: 'string',
        },
        continue: {
            type: 'string',
        },
        items: {
            type: 'array',
            contains: {
                type: 'v1_Pod',
            },
        },
        kind: {
            type: 'string',
        },
        remainingItemCount: {
            type: 'number',
        },
        resourceVersion: {
            type: 'string',
        },
        selfLink: {
            type: 'string',
        },
    },
};