/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_EphemeralContainer = {
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
        targetContainerName: {
            type: 'string',
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