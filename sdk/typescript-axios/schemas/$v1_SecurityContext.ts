/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_SecurityContext = {
    properties: {
        allowPrivilegeEscalation: {
            type: 'boolean',
        },
        capabilities: {
            type: 'v1_Capabilities',
        },
        privileged: {
            type: 'boolean',
        },
        procMount: {
            type: 'string',
        },
        readOnlyRootFilesystem: {
            type: 'boolean',
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
        windowsOptions: {
            type: 'v1_WindowsSecurityContextOptions',
        },
    },
};