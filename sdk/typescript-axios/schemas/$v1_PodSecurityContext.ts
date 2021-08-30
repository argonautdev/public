/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_PodSecurityContext = {
    properties: {
        fsGroup: {
            type: 'number',
        },
        fsGroupChangePolicy: {
            type: 'string',
        },
        runAsGroup: {
            type: 'number',
        },
        runAsNonRoot: {
            type: 'boolean',
        },
        runAsUser: {
            type: 'number',
        },
        seLinuxOptions: {
            type: 'v1_SELinuxOptions',
        },
        seccompProfile: {
            type: 'v1_SeccompProfile',
        },
        supplementalGroups: {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        sysctls: {
            type: 'array',
            contains: {
                type: 'v1_Sysctl',
            },
        },
        windowsOptions: {
            type: 'v1_WindowsSecurityContextOptions',
        },
    },
};