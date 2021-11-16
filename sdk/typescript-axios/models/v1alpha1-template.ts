/* tslint:disable */
/* eslint-disable */
/**
 * Midgard API Docs
 * This is the docs for midgard api for argonaut
 *
 * The version of the OpenAPI document: 0.4.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { IntstrIntOrString } from './intstr-int-or-string';
import { V1Affinity } from './v1-affinity';
import { V1Container } from './v1-container';
import { V1HostAlias } from './v1-host-alias';
import { V1PodSecurityContext } from './v1-pod-security-context';
import { V1Toleration } from './v1-toleration';
import { V1Volume } from './v1-volume';
import { V1alpha1ArtifactLocation } from './v1alpha1-artifact-location';
import { V1alpha1ContainerSetTemplate } from './v1alpha1-container-set-template';
import { V1alpha1DAGTemplate } from './v1alpha1-dagtemplate';
import { V1alpha1Data } from './v1alpha1-data';
import { V1alpha1ExecutorConfig } from './v1alpha1-executor-config';
import { V1alpha1HTTP } from './v1alpha1-http';
import { V1alpha1Inputs } from './v1alpha1-inputs';
import { V1alpha1Memoize } from './v1alpha1-memoize';
import { V1alpha1Metadata } from './v1alpha1-metadata';
import { V1alpha1Metrics } from './v1alpha1-metrics';
import { V1alpha1Outputs } from './v1alpha1-outputs';
import { V1alpha1ResourceTemplate } from './v1alpha1-resource-template';
import { V1alpha1RetryStrategy } from './v1alpha1-retry-strategy';
import { V1alpha1ScriptTemplate } from './v1alpha1-script-template';
import { V1alpha1SuspendTemplate } from './v1alpha1-suspend-template';
import { V1alpha1Synchronization } from './v1alpha1-synchronization';
import { V1alpha1UserContainer } from './v1alpha1-user-container';

/**
 * 
 * @export
 * @interface V1alpha1Template
 */
export interface V1alpha1Template {
    /**
     * 
     * @type {IntstrIntOrString}
     * @memberof V1alpha1Template
     */
    activeDeadlineSeconds?: IntstrIntOrString;
    /**
     * 
     * @type {V1Affinity}
     * @memberof V1alpha1Template
     */
    affinity?: V1Affinity;
    /**
     * 
     * @type {V1alpha1ArtifactLocation}
     * @memberof V1alpha1Template
     */
    archiveLocation?: V1alpha1ArtifactLocation;
    /**
     * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted in pods. ServiceAccountName of ExecutorConfig must be specified if this value is false.
     * @type {boolean}
     * @memberof V1alpha1Template
     */
    automountServiceAccountToken?: boolean;
    /**
     * 
     * @type {V1Container}
     * @memberof V1alpha1Template
     */
    container?: V1Container;
    /**
     * 
     * @type {V1alpha1ContainerSetTemplate}
     * @memberof V1alpha1Template
     */
    containerSet?: V1alpha1ContainerSetTemplate;
    /**
     * Deamon will allow a workflow to proceed to the next step so long as the container reaches readiness
     * @type {boolean}
     * @memberof V1alpha1Template
     */
    daemon?: boolean;
    /**
     * 
     * @type {V1alpha1DAGTemplate}
     * @memberof V1alpha1Template
     */
    dag?: V1alpha1DAGTemplate;
    /**
     * 
     * @type {V1alpha1Data}
     * @memberof V1alpha1Template
     */
    data?: V1alpha1Data;
    /**
     * 
     * @type {V1alpha1ExecutorConfig}
     * @memberof V1alpha1Template
     */
    executor?: V1alpha1ExecutorConfig;
    /**
     * FailFast, if specified, will fail this template if any of its child pods has failed. This is useful for when this template is expanded with `withItems`, etc.
     * @type {boolean}
     * @memberof V1alpha1Template
     */
    failFast?: boolean;
    /**
     * HostAliases is an optional list of hosts and IPs that will be injected into the pod spec +patchStrategy=merge +patchMergeKey=ip
     * @type {Array<V1HostAlias>}
     * @memberof V1alpha1Template
     */
    hostAliases?: Array<V1HostAlias>;
    /**
     * 
     * @type {V1alpha1HTTP}
     * @memberof V1alpha1Template
     */
    http?: V1alpha1HTTP;
    /**
     * InitContainers is a list of containers which run before the main container. +patchStrategy=merge +patchMergeKey=name
     * @type {Array<V1alpha1UserContainer>}
     * @memberof V1alpha1Template
     */
    initContainers?: Array<V1alpha1UserContainer>;
    /**
     * 
     * @type {V1alpha1Inputs}
     * @memberof V1alpha1Template
     */
    inputs?: V1alpha1Inputs;
    /**
     * 
     * @type {V1alpha1Memoize}
     * @memberof V1alpha1Template
     */
    memoize?: V1alpha1Memoize;
    /**
     * 
     * @type {V1alpha1Metadata}
     * @memberof V1alpha1Template
     */
    metadata?: V1alpha1Metadata;
    /**
     * 
     * @type {V1alpha1Metrics}
     * @memberof V1alpha1Template
     */
    metrics?: V1alpha1Metrics;
    /**
     * Name is the name of the template
     * @type {string}
     * @memberof V1alpha1Template
     */
    name?: string;
    /**
     * NodeSelector is a selector to schedule this step of the workflow to be run on the selected node(s). Overrides the selector set at the workflow level.
     * @type {{ [key: string]: string; }}
     * @memberof V1alpha1Template
     */
    nodeSelector?: { [key: string]: string; };
    /**
     * 
     * @type {V1alpha1Outputs}
     * @memberof V1alpha1Template
     */
    outputs?: V1alpha1Outputs;
    /**
     * Parallelism limits the max total parallel pods that can execute at the same time within the boundaries of this template invocation. If additional steps/dag templates are invoked, the pods created by those templates will not be counted towards this total.
     * @type {number}
     * @memberof V1alpha1Template
     */
    parallelism?: number;
    /**
     * PodSpecPatch holds strategic merge patch to apply against the pod spec. Allows parameterization of container fields which are not strings (e.g. resource limits).
     * @type {string}
     * @memberof V1alpha1Template
     */
    podSpecPatch?: string;
    /**
     * Priority to apply to workflow pods.
     * @type {number}
     * @memberof V1alpha1Template
     */
    priority?: number;
    /**
     * PriorityClassName to apply to workflow pods.
     * @type {string}
     * @memberof V1alpha1Template
     */
    priorityClassName?: string;
    /**
     * 
     * @type {V1alpha1ResourceTemplate}
     * @memberof V1alpha1Template
     */
    resource?: V1alpha1ResourceTemplate;
    /**
     * 
     * @type {V1alpha1RetryStrategy}
     * @memberof V1alpha1Template
     */
    retryStrategy?: V1alpha1RetryStrategy;
    /**
     * If specified, the pod will be dispatched by specified scheduler. Or it will be dispatched by workflow scope scheduler if specified. If neither specified, the pod will be dispatched by default scheduler. +optional
     * @type {string}
     * @memberof V1alpha1Template
     */
    schedulerName?: string;
    /**
     * 
     * @type {V1alpha1ScriptTemplate}
     * @memberof V1alpha1Template
     */
    script?: V1alpha1ScriptTemplate;
    /**
     * 
     * @type {V1PodSecurityContext}
     * @memberof V1alpha1Template
     */
    securityContext?: V1PodSecurityContext;
    /**
     * ServiceAccountName to apply to workflow pods
     * @type {string}
     * @memberof V1alpha1Template
     */
    serviceAccountName?: string;
    /**
     * Sidecars is a list of containers which run alongside the main container Sidecars are automatically killed when the main container completes +patchStrategy=merge +patchMergeKey=name
     * @type {Array<V1alpha1UserContainer>}
     * @memberof V1alpha1Template
     */
    sidecars?: Array<V1alpha1UserContainer>;
    /**
     * Steps define a series of sequential/parallel workflow steps
     * @type {Array<object>}
     * @memberof V1alpha1Template
     */
    steps?: Array<object>;
    /**
     * 
     * @type {V1alpha1SuspendTemplate}
     * @memberof V1alpha1Template
     */
    suspend?: V1alpha1SuspendTemplate;
    /**
     * 
     * @type {V1alpha1Synchronization}
     * @memberof V1alpha1Template
     */
    synchronization?: V1alpha1Synchronization;
    /**
     * Timout allows to set the total node execution timeout duration counting from the node\'s start time. This duration also includes time in which the node spends in Pending state. This duration may not be applied to Step or DAG templates.
     * @type {string}
     * @memberof V1alpha1Template
     */
    timeout?: string;
    /**
     * Tolerations to apply to workflow pods. +patchStrategy=merge +patchMergeKey=key
     * @type {Array<V1Toleration>}
     * @memberof V1alpha1Template
     */
    tolerations?: Array<V1Toleration>;
    /**
     * Volumes is a list of volumes that can be mounted by containers in a template. +patchStrategy=merge +patchMergeKey=name
     * @type {Array<V1Volume>}
     * @memberof V1alpha1Template
     */
    volumes?: Array<V1Volume>;
}


