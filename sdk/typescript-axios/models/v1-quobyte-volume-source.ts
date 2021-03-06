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
 * @interface V1QuobyteVolumeSource
 */
export interface V1QuobyteVolumeSource {
    /**
     * Group to map volume access to Default is no group +optional
     * @type {string}
     * @memberof V1QuobyteVolumeSource
     */
    group?: string;
    /**
     * ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false. +optional
     * @type {boolean}
     * @memberof V1QuobyteVolumeSource
     */
    readOnly?: boolean;
    /**
     * Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
     * @type {string}
     * @memberof V1QuobyteVolumeSource
     */
    registry?: string;
    /**
     * Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin +optional
     * @type {string}
     * @memberof V1QuobyteVolumeSource
     */
    tenant?: string;
    /**
     * User to map volume access to Defaults to serivceaccount user +optional
     * @type {string}
     * @memberof V1QuobyteVolumeSource
     */
    user?: string;
    /**
     * Volume is a string that references an already created Quobyte volume by name.
     * @type {string}
     * @memberof V1QuobyteVolumeSource
     */
    volume?: string;
}


