/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_ContainerStatus = {
    properties: {
        containerID: {
            type: 'string',
        },
        image: {
            type: 'string',
        },
        imageID: {
            type: 'string',
        },
        lastState: {
            type: 'v1_ContainerState',
        },
        name: {
            type: 'string',
        },
        ready: {
            type: 'boolean',
        },
        restartCount: {
            type: 'number',
        },
        started: {
            type: 'boolean',
        },
        state: {
            type: 'v1_ContainerState',
        },
    },
};