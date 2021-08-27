/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_PodSpec = {
    properties: {
        activeDeadlineSeconds: {
            type: 'number',
        },
        affinity: {
            type: 'v1_Affinity',
        },
        automountServiceAccountToken: {
            type: 'boolean',
        },
        containers: {
            type: 'array',
            contains: {
                type: 'v1_Container',
            },
        },
        dnsConfig: {
            type: 'v1_PodDNSConfig',
        },
        dnsPolicy: {
            type: 'string',
        },
        enableServiceLinks: {
            type: 'boolean',
        },
        ephemeralContainers: {
            type: 'array',
            contains: {
                type: 'v1_EphemeralContainer',
            },
        },
        hostAliases: {
            type: 'array',
            contains: {
                type: 'v1_HostAlias',
            },
        },
        hostIPC: {
            type: 'boolean',
        },
        hostNetwork: {
            type: 'boolean',
        },
        hostPID: {
            type: 'boolean',
        },
        hostname: {
            type: 'string',
        },
        imagePullSecrets: {
            type: 'array',
            contains: {
                type: 'v1_LocalObjectReference',
            },
        },
        initContainers: {
            type: 'array',
            contains: {
                type: 'v1_Container',
            },
        },
        nodeName: {
            type: 'string',
        },
        nodeSelector: {
            type: 'dictionary',
            contains: {
                type: 'string',
            },
        },
        overhead: {
            type: 'v1_ResourceList',
        },
        preemptionPolicy: {
            type: 'string',
        },
        priority: {
            type: 'number',
        },
        priorityClassName: {
            type: 'string',
        },
        readinessGates: {
            type: 'array',
            contains: {
                type: 'v1_PodReadinessGate',
            },
        },
        restartPolicy: {
            type: 'string',
        },
        runtimeClassName: {
            type: 'string',
        },
        schedulerName: {
            type: 'string',
        },
        securityContext: {
            type: 'v1_PodSecurityContext',
        },
        serviceAccount: {
            type: 'string',
        },
        serviceAccountName: {
            type: 'string',
        },
        setHostnameAsFQDN: {
            type: 'boolean',
        },
        shareProcessNamespace: {
            type: 'boolean',
        },
        subdomain: {
            type: 'string',
        },
        terminationGracePeriodSeconds: {
            type: 'number',
        },
        tolerations: {
            type: 'array',
            contains: {
                type: 'v1_Toleration',
            },
        },
        topologySpreadConstraints: {
            type: 'array',
            contains: {
                type: 'v1_TopologySpreadConstraint',
            },
        },
        volumes: {
            type: 'array',
            contains: {
                type: 'v1_Volume',
            },
        },
    },
};