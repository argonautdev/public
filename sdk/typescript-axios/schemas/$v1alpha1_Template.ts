/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_Template = {
    properties: {
        activeDeadlineSeconds: {
            type: 'intstr_IntOrString',
        },
        affinity: {
            type: 'v1_Affinity',
        },
        archiveLocation: {
            type: 'v1alpha1_ArtifactLocation',
        },
        automountServiceAccountToken: {
            type: 'boolean',
        },
        container: {
            type: 'v1_Container',
        },
        containerSet: {
            type: 'v1alpha1_ContainerSetTemplate',
        },
        daemon: {
            type: 'boolean',
        },
        dag: {
            type: 'v1alpha1_DAGTemplate',
        },
        data: {
            type: 'v1alpha1_Data',
        },
        executor: {
            type: 'v1alpha1_ExecutorConfig',
        },
        failFast: {
            type: 'boolean',
        },
        hostAliases: {
            type: 'array',
            contains: {
                type: 'v1_HostAlias',
            },
        },
        http: {
            type: 'v1alpha1_HTTP',
        },
        initContainers: {
            type: 'array',
            contains: {
                type: 'v1alpha1_UserContainer',
            },
        },
        inputs: {
            type: 'v1alpha1_Inputs',
        },
        memoize: {
            type: 'v1alpha1_Memoize',
        },
        metadata: {
            type: 'v1alpha1_Metadata',
        },
        metrics: {
            type: 'v1alpha1_Metrics',
        },
        name: {
            type: 'string',
        },
        nodeSelector: {
            type: 'dictionary',
            contains: {
                type: 'string',
            },
        },
        outputs: {
            type: 'v1alpha1_Outputs',
        },
        parallelism: {
            type: 'number',
        },
        podSpecPatch: {
            type: 'string',
        },
        priority: {
            type: 'number',
        },
        priorityClassName: {
            type: 'string',
        },
        resource: {
            type: 'v1alpha1_ResourceTemplate',
        },
        retryStrategy: {
            type: 'v1alpha1_RetryStrategy',
        },
        schedulerName: {
            type: 'string',
        },
        script: {
            type: 'v1alpha1_ScriptTemplate',
        },
        securityContext: {
            type: 'v1_PodSecurityContext',
        },
        serviceAccountName: {
            type: 'string',
        },
        sidecars: {
            type: 'array',
            contains: {
                type: 'v1alpha1_UserContainer',
            },
        },
        steps: {
            type: 'array',
            contains: {
                type: 'v1alpha1_ParallelSteps',
            },
        },
        suspend: {
            type: 'v1alpha1_SuspendTemplate',
        },
        synchronization: {
            type: 'v1alpha1_Synchronization',
        },
        timeout: {
            type: 'string',
        },
        tolerations: {
            type: 'array',
            contains: {
                type: 'v1_Toleration',
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