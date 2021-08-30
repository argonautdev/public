/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_PodStatus = {
    properties: {
        conditions: {
            type: 'array',
            contains: {
                type: 'v1_PodCondition',
            },
        },
        containerStatuses: {
            type: 'array',
            contains: {
                type: 'v1_ContainerStatus',
            },
        },
        ephemeralContainerStatuses: {
            type: 'array',
            contains: {
                type: 'v1_ContainerStatus',
            },
        },
        hostIP: {
            type: 'string',
        },
        initContainerStatuses: {
            type: 'array',
            contains: {
                type: 'v1_ContainerStatus',
            },
        },
        message: {
            type: 'string',
        },
        nominatedNodeName: {
            type: 'string',
        },
        phase: {
            type: 'string',
        },
        podIP: {
            type: 'string',
        },
        podIPs: {
            type: 'array',
            contains: {
                type: 'v1_PodIP',
            },
        },
        qosClass: {
            type: 'string',
        },
        reason: {
            type: 'string',
        },
        startTime: {
            type: 'string',
        },
    },
};