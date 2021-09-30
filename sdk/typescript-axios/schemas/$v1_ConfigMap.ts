/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_ConfigMap = {
    properties: {
        annotations: {
            type: 'dictionary',
            contains: {
                type: 'string',
            },
        },
        apiVersion: {
            type: 'string',
        },
        binaryData: {
            type: 'dictionary',
            contains: {
                type: 'array',
                contains: {
                    type: 'number',
                },
            },
        },
        clusterName: {
            type: 'string',
        },
        creationTimestamp: {
            type: 'string',
        },
        data: {
            type: 'dictionary',
            contains: {
                type: 'string',
            },
        },
        deletionGracePeriodSeconds: {
            type: 'number',
        },
        deletionTimestamp: {
            type: 'string',
        },
        finalizers: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        generateName: {
            type: 'string',
        },
        generation: {
            type: 'number',
        },
        immutable: {
            type: 'boolean',
        },
        kind: {
            type: 'string',
        },
        labels: {
            type: 'dictionary',
            contains: {
                type: 'string',
            },
        },
        managedFields: {
            type: 'array',
            contains: {
                type: 'v1_ManagedFieldsEntry',
            },
        },
        name: {
            type: 'string',
        },
        namespace: {
            type: 'string',
        },
        ownerReferences: {
            type: 'array',
            contains: {
                type: 'v1_OwnerReference',
            },
        },
        resourceVersion: {
            type: 'string',
        },
        selfLink: {
            type: 'string',
        },
        uid: {
            type: 'string',
        },
    },
};