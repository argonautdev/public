/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_PersistentVolumeClaimTemplate = {
    properties: {
        annotations: {
            type: 'dictionary',
            contains: {
                type: 'string',
            },
        },
        clusterName: {
            type: 'string',
        },
        creationTimestamp: {
            type: 'string',
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
        spec: {
            type: 'v1_PersistentVolumeClaimSpec',
        },
        uid: {
            type: 'string',
        },
    },
};