/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_WorkflowStatus = {
    properties: {
        artifactRepositoryRef: {
            type: 'v1alpha1_ArtifactRepositoryRefStatus',
        },
        compressedNodes: {
            type: 'string',
        },
        conditions: {
            type: 'array',
            contains: {
                type: 'v1alpha1_Condition',
            },
        },
        estimatedDuration: {
            type: 'number',
        },
        finishedAt: {
            type: 'string',
        },
        message: {
            type: 'string',
        },
        nodes: {
            type: 'v1alpha1_Nodes',
        },
        offloadNodeStatusVersion: {
            type: 'string',
        },
        outputs: {
            type: 'v1alpha1_Outputs',
        },
        persistentVolumeClaims: {
            type: 'array',
            contains: {
                type: 'v1_Volume',
            },
        },
        phase: {
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
        storedTemplates: {
            type: 'dictionary',
            contains: {
                type: 'v1alpha1_Template',
            },
        },
        storedWorkflowTemplateSpec: {
            type: 'v1alpha1_WorkflowSpec',
        },
        synchronization: {
            type: 'v1alpha1_SynchronizationStatus',
        },
    },
};