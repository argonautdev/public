/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_Probe = {
    properties: {
        exec: {
            type: 'v1_ExecAction',
        },
        failureThreshold: {
            type: 'number',
        },
        httpGet: {
            type: 'v1_HTTPGetAction',
        },
        initialDelaySeconds: {
            type: 'number',
        },
        periodSeconds: {
            type: 'number',
        },
        successThreshold: {
            type: 'number',
        },
        tcpSocket: {
            type: 'v1_TCPSocketAction',
        },
        terminationGracePeriodSeconds: {
            type: 'number',
        },
        timeoutSeconds: {
            type: 'number',
        },
    },
};