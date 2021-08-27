/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_GetApplicationDetailsResponse = {
    properties: {
        ConfigMaps: {
            type: 'array',
            contains: {
                type: 'v1_ConfigMapStruct',
            },
        },
        DaemonSet: {
            type: 'array',
            contains: {
                type: 'v1_DaemonSetStruct',
            },
        },
        Deployment: {
            type: 'array',
            contains: {
                type: 'v1_DeploymentStruct',
            },
        },
        PersistantVolumeClaims: {
            type: 'array',
            contains: {
                type: 'v1_PersistentVolumeStruct',
            },
        },
        Pods: {
            type: 'array',
            contains: {
                type: 'v1_PodStruct',
            },
        },
        Secrets: {
            type: 'array',
            contains: {
                type: 'v1_SecretStruct',
            },
        },
        Services: {
            type: 'array',
            contains: {
                type: 'v1_ServiceStruct',
            },
        },
        StatefulSet: {
            type: 'array',
            contains: {
                type: 'v1_StatefulSetStruct',
            },
        },
    },
};