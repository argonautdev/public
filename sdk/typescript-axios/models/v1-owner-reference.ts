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



/**
 * 
 * @export
 * @interface V1OwnerReference
 */
export interface V1OwnerReference {
    /**
     * API version of the referent.
     * @type {string}
     * @memberof V1OwnerReference
     */
    apiVersion?: string;
    /**
     * If true, AND if the owner has the \"foregroundDeletion\" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs \"delete\" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. +optional
     * @type {boolean}
     * @memberof V1OwnerReference
     */
    blockOwnerDeletion?: boolean;
    /**
     * If true, this reference points to the managing controller. +optional
     * @type {boolean}
     * @memberof V1OwnerReference
     */
    controller?: boolean;
    /**
     * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1OwnerReference
     */
    kind?: string;
    /**
     * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
     * @type {string}
     * @memberof V1OwnerReference
     */
    name?: string;
    /**
     * UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
     * @type {string}
     * @memberof V1OwnerReference
     */
    uid?: string;
}


