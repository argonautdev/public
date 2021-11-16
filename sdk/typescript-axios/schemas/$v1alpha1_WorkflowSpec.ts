/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_WorkflowSpec = {
    properties: {
        activeDeadlineSeconds: {
            type: 'number',
        },
        affinity: {
            type: 'v1_Affinity',
        },
        archiveLogs: {
            type: 'boolean',
        },
        arguments: {
            type: 'v1alpha1_Arguments',
        },
        artifactRepositoryRef: {
            type: 'v1alpha1_ArtifactRepositoryRef',
        },
        automountServiceAccountToken: {
            type: 'boolean',
        },
        dnsConfig: {
            type: 'v1_PodDNSConfig',
        },
        dnsPolicy: {
            type: 'string',
        },
        entrypoint: {
            type: 'string',
        },
        executor: {
            type: 'v1alpha1_ExecutorConfig',
        },
        hostAliases: {
            type: 'array',
            contains: {
                type: 'v1_HostAlias',
            },
        },
        hostNetwork: {
            type: 'boolean',
        },
        imagePullSecrets: {
            type: 'array',
            contains: {
                type: 'v1_LocalObjectReference',
            },
        },
        metrics: {
            type: 'v1alpha1_Metrics',
        },
        nodeSelector: {
            type: 'dictionary',
            contains: {
                type: 'string',
            },
        },
        onExit: {
            type: 'string',
        },
        parallelism: {
            type: 'number',
        },
        podDisruptionBudget: {
            type: 'v1beta1_PodDisruptionBudgetSpec',
        },
        podGC: {
            type: 'v1alpha1_PodGC',
        },
        podMetadata: {
            type: 'v1alpha1_Metadata',
        },
        podPriority: {
            type: 'number',
        },
        podPriorityClassName: {
            type: 'string',
        },
        podSpecPatch: {
            type: 'string',
        },
        priority: {
            type: 'number',
        },
        retryStrategy: {
            type: 'v1alpha1_RetryStrategy',
        },
        schedulerName: {
            type: 'string',
        },
        securityContext: {
            type: 'v1_PodSecurityContext',
        },
        serviceAccountName: {
            type: 'string',
        },
        shutdown: {
            type: 'string',
        },
        suspend: {
            type: 'boolean',
        },
        synchronization: {
            type: 'v1alpha1_Synchronization',
        },
        templateDefaults: {
            type: 'v1alpha1_Template',
        },
        templates: {
            type: 'array',
            contains: {
                type: 'v1alpha1_Template',
            },
        },
        tolerations: {
            type: 'array',
            contains: {
                type: 'v1_Toleration',
            },
        },
        ttlStrategy: {
            type: 'v1alpha1_TTLStrategy',
        },
        volumeClaimGC: {
            type: 'v1alpha1_VolumeClaimGC',
        },
        volumeClaimTemplates: {
            type: 'array',
            contains: {
                type: 'v1_PersistentVolumeClaim',
            },
        },
        volumes: {
            type: 'array',
            contains: {
                type: 'v1_Volume',
            },
        },
        workflowTemplateRef: {
            type: 'v1alpha1_WorkflowTemplateRef',
        },
    },
};