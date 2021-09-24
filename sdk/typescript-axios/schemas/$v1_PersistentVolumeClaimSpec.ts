/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_PersistentVolumeClaimSpec = {
    properties: {
        accessModes: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        dataSource: {
            type: 'v1_TypedLocalObjectReference',
        },
        dataSourceRef: {
            type: 'v1_TypedLocalObjectReference',
        },
        resources: {
            type: 'v1_ResourceRequirements',
        },
        selector: {
            type: 'v1_LabelSelector',
        },
        storageClassName: {
            type: 'string',
        },
        volumeMode: {
            type: 'string',
        },
        volumeName: {
            type: 'string',
        },
    },
};