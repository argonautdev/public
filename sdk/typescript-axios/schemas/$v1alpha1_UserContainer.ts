/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_UserContainer = {
    properties: {
        args: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        command: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        env: {
            type: 'array',
            contains: {
                type: 'v1_EnvVar',
            },
        },
        envFrom: {
            type: 'array',
            contains: {
                type: 'v1_EnvFromSource',
            },
        },
        image: {
            type: 'string',
        },
        imagePullPolicy: {
            type: 'string',
        },
        lifecycle: {
            type: 'v1_Lifecycle',
        },
        livenessProbe: {
            type: 'v1_Probe',
        },
        mirrorVolumeMounts: {
            type: 'boolean',
        },
        name: {
            type: 'string',
        },
        ports: {
            type: 'array',
            contains: {
                type: 'v1_ContainerPort',
            },
        },
        readinessProbe: {
            type: 'v1_Probe',
        },
        resources: {
            type: 'v1_ResourceRequirements',
        },
        securityContext: {
            type: 'v1_SecurityContext',
        },
        startupProbe: {
            type: 'v1_Probe',
        },
        stdin: {
            type: 'boolean',
        },
        stdinOnce: {
            type: 'boolean',
        },
        terminationMessagePath: {
            type: 'string',
        },
        terminationMessagePolicy: {
            type: 'string',
        },
        tty: {
            type: 'boolean',
        },
        volumeDevices: {
            type: 'array',
            contains: {
                type: 'v1_VolumeDevice',
            },
        },
        volumeMounts: {
            type: 'array',
            contains: {
                type: 'v1_VolumeMount',
            },
        },
        workingDir: {
            type: 'string',
        },
    },
};