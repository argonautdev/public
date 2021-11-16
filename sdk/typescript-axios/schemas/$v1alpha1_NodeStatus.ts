/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_NodeStatus = {
    properties: {
        boundaryID: {
            type: 'string',
        },
        children: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        daemoned: {
            type: 'boolean',
        },
        displayName: {
            type: 'string',
        },
        estimatedDuration: {
            type: 'number',
        },
        finishedAt: {
            type: 'string',
        },
        hostNodeName: {
            type: 'string',
        },
        id: {
            type: 'string',
        },
        inputs: {
            type: 'v1alpha1_Inputs',
        },
        memoizationStatus: {
            type: 'v1alpha1_MemoizationStatus',
        },
        message: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        outboundNodes: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        outputs: {
            type: 'v1alpha1_Outputs',
        },
        phase: {
            type: 'string',
        },
        podIP: {
            type: 'string',
        },
        progress: {
            type: 'string',
        },
        resourcesDuration: {
            type: 'v1alpha1_ResourcesDuration',
        },
        startedAt: {
            type: 'string',
        },
        synchronizationStatus: {
            type: 'v1alpha1_NodeSynchronizationStatus',
        },
        templateName: {
            type: 'string',
        },
        templateRef: {
            type: 'v1alpha1_TemplateRef',
        },
        templateScope: {
            type: 'string',
        },
        type: {
            type: 'string',
        },
    },
};