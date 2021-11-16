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


import { V1alpha1Inputs } from './v1alpha1-inputs';
import { V1alpha1MemoizationStatus } from './v1alpha1-memoization-status';
import { V1alpha1NodeSynchronizationStatus } from './v1alpha1-node-synchronization-status';
import { V1alpha1Outputs } from './v1alpha1-outputs';
import { V1alpha1TemplateRef } from './v1alpha1-template-ref';

/**
 * 
 * @export
 * @interface V1alpha1NodeStatus
 */
export interface V1alpha1NodeStatus {
    /**
     * BoundaryID indicates the node ID of the associated template root node in which this node belongs to
     * @type {string}
     * @memberof V1alpha1NodeStatus
     */
    boundaryID?: string;
    /**
     * Children is a list of child node IDs
     * @type {Array<string>}
     * @memberof V1alpha1NodeStatus
     */
    children?: Array<string>;
    /**
     * Daemoned tracks whether or not this node was daemoned and need to be terminated
     * @type {boolean}
     * @memberof V1alpha1NodeStatus
     */
    daemoned?: boolean;
    /**
     * DisplayName is a human readable representation of the node. Unique within a template boundary
     * @type {string}
     * @memberof V1alpha1NodeStatus
     */
    displayName?: string;
    /**
     * EstimatedDuration in seconds.
     * @type {number}
     * @memberof V1alpha1NodeStatus
     */
    estimatedDuration?: number;
    /**
     * Time at which this node completed
     * @type {string}
     * @memberof V1alpha1NodeStatus
     */
    finishedAt?: string;
    /**
     * HostNodeName name of the Kubernetes node on which the Pod is running, if applicable
     * @type {string}
     * @memberof V1alpha1NodeStatus
     */
    hostNodeName?: string;
    /**
     * ID is a unique identifier of a node within the worklow It is implemented as a hash of the node name, which makes the ID deterministic
     * @type {string}
     * @memberof V1alpha1NodeStatus
     */
    id?: string;
    /**
     * 
     * @type {V1alpha1Inputs}
     * @memberof V1alpha1NodeStatus
     */
    inputs?: V1alpha1Inputs;
    /**
     * 
     * @type {V1alpha1MemoizationStatus}
     * @memberof V1alpha1NodeStatus
     */
    memoizationStatus?: V1alpha1MemoizationStatus;
    /**
     * A human readable message indicating details about why the node is in this condition.
     * @type {string}
     * @memberof V1alpha1NodeStatus
     */
    message?: string;
    /**
     * Name is unique name in the node tree used to generate the node ID
     * @type {string}
     * @memberof V1alpha1NodeStatus
     */
    name?: string;
    /**
     * OutboundNodes tracks the node IDs which are considered \"outbound\" nodes to a template invocation. For every invocation of a template, there are nodes which we considered as \"outbound\". Essentially, these are last nodes in the execution sequence to run, before the template is considered completed. These nodes are then connected as parents to a following step.  In the case of single pod steps (i.e. container, script, resource templates), this list will be nil since the pod itself is already considered the \"outbound\" node. In the case of DAGs, outbound nodes are the \"target\" tasks (tasks with no children). In the case of steps, outbound nodes are all the containers involved in the last step group. NOTE: since templates are composable, the list of outbound nodes are carried upwards when a DAG/steps template invokes another DAG/steps template. In other words, the outbound nodes of a template, will be a superset of the outbound nodes of its last children.
     * @type {Array<string>}
     * @memberof V1alpha1NodeStatus
     */
    outboundNodes?: Array<string>;
    /**
     * 
     * @type {V1alpha1Outputs}
     * @memberof V1alpha1NodeStatus
     */
    outputs?: V1alpha1Outputs;
    /**
     * Phase a simple, high-level summary of where the node is in its lifecycle. Can be used as a state machine.
     * @type {string}
     * @memberof V1alpha1NodeStatus
     */
    phase?: string;
    /**
     * PodIP captures the IP of the pod for daemoned steps
     * @type {string}
     * @memberof V1alpha1NodeStatus
     */
    podIP?: string;
    /**
     * Progress to completion
     * @type {string}
     * @memberof V1alpha1NodeStatus
     */
    progress?: string;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof V1alpha1NodeStatus
     */
    resourcesDuration?: { [key: string]: number; };
    /**
     * Time at which this node started
     * @type {string}
     * @memberof V1alpha1NodeStatus
     */
    startedAt?: string;
    /**
     * 
     * @type {V1alpha1NodeSynchronizationStatus}
     * @memberof V1alpha1NodeStatus
     */
    synchronizationStatus?: V1alpha1NodeSynchronizationStatus;
    /**
     * TemplateName is the template name which this node corresponds to. Not applicable to virtual nodes (e.g. Retry, StepGroup)
     * @type {string}
     * @memberof V1alpha1NodeStatus
     */
    templateName?: string;
    /**
     * 
     * @type {V1alpha1TemplateRef}
     * @memberof V1alpha1NodeStatus
     */
    templateRef?: V1alpha1TemplateRef;
    /**
     * TemplateScope is the template scope in which the template of this node was retrieved.
     * @type {string}
     * @memberof V1alpha1NodeStatus
     */
    templateScope?: string;
    /**
     * Type indicates type of node
     * @type {string}
     * @memberof V1alpha1NodeStatus
     */
    type?: string;
}


