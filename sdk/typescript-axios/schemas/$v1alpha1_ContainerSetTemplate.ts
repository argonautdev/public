/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_ContainerSetTemplate = {
    properties: {
        containers: {
            type: 'array',
            contains: {
                type: 'v1alpha1_ContainerNode',
            },
        },
        volumeMounts: {
            type: 'array',
            contains: {
                type: 'v1_VolumeMount',
            },
        },
    },
};