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


import { V1ManagedFieldsEntry } from './v1-managed-fields-entry';
import { V1OwnerReference } from './v1-owner-reference';

/**
 * 
 * @export
 * @interface V1ConfigMap
 */
export interface V1ConfigMap {
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations +optional
     * @type {{ [key: string]: string; }}
     * @memberof V1ConfigMap
     */
    annotations?: { [key: string]: string; };
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources +optional
     * @type {string}
     * @memberof V1ConfigMap
     */
    apiVersion?: string;
    /**
     * BinaryData contains the binary data. Each key must consist of alphanumeric characters, \'-\', \'_\' or \'.\'. BinaryData can contain byte sequences that are not in the UTF-8 range. The keys stored in BinaryData must not overlap with the ones in the Data field, this is enforced during validation process. Using this field will require 1.10+ apiserver and kubelet. +optional
     * @type {{ [key: string]: Array<number>; }}
     * @memberof V1ConfigMap
     */
    binaryData?: { [key: string]: Array<number>; };
    /**
     * The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request. +optional
     * @type {string}
     * @memberof V1ConfigMap
     */
    clusterName?: string;
    /**
     * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.  Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata +optional
     * @type {string}
     * @memberof V1ConfigMap
     */
    creationTimestamp?: string;
    /**
     * Data contains the configuration data. Each key must consist of alphanumeric characters, \'-\', \'_\' or \'.\'. Values with non-UTF-8 byte sequences must use the BinaryData field. The keys stored in Data must not overlap with the keys in the BinaryData field, this is enforced during validation process. +optional
     * @type {{ [key: string]: string; }}
     * @memberof V1ConfigMap
     */
    data?: { [key: string]: string; };
    /**
     * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only. +optional
     * @type {number}
     * @memberof V1ConfigMap
     */
    deletionGracePeriodSeconds?: number;
    /**
     * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.  Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata +optional
     * @type {string}
     * @memberof V1ConfigMap
     */
    deletionTimestamp?: string;
    /**
     * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list. +optional +patchStrategy=merge
     * @type {Array<string>}
     * @memberof V1ConfigMap
     */
    finalizers?: Array<string>;
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.  If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).  Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency +optional
     * @type {string}
     * @memberof V1ConfigMap
     */
    generateName?: string;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only. +optional
     * @type {number}
     * @memberof V1ConfigMap
     */
    generation?: number;
    /**
     * Immutable, if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil. +optional
     * @type {boolean}
     * @memberof V1ConfigMap
     */
    immutable?: boolean;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds +optional
     * @type {string}
     * @memberof V1ConfigMap
     */
    kind?: string;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels +optional
     * @type {{ [key: string]: string; }}
     * @memberof V1ConfigMap
     */
    labels?: { [key: string]: string; };
    /**
     * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn\'t need to set or understand this field. A workflow can be the user\'s name, a controller\'s name, or the name of a specific apply path like \"ci-cd\". The set of fields is always in the version that the workflow used when modifying the object.  +optional
     * @type {Array<V1ManagedFieldsEntry>}
     * @memberof V1ConfigMap
     */
    managedFields?: Array<V1ManagedFieldsEntry>;
    /**
     * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names +optional
     * @type {string}
     * @memberof V1ConfigMap
     */
    name?: string;
    /**
     * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the \"default\" namespace, but \"default\" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.  Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces +optional
     * @type {string}
     * @memberof V1ConfigMap
     */
    namespace?: string;
    /**
     * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller. +optional +patchMergeKey=uid +patchStrategy=merge
     * @type {Array<V1OwnerReference>}
     * @memberof V1ConfigMap
     */
    ownerReferences?: Array<V1OwnerReference>;
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.  Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency +optional
     * @type {string}
     * @memberof V1ConfigMap
     */
    resourceVersion?: string;
    /**
     * SelfLink is a URL representing this object. Populated by the system. Read-only.  DEPRECATED Kubernetes will stop propagating this field in 1.20 release and the field is planned to be removed in 1.21 release. +optional
     * @type {string}
     * @memberof V1ConfigMap
     */
    selfLink?: string;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.  Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids +optional
     * @type {string}
     * @memberof V1ConfigMap
     */
    uid?: string;
}


