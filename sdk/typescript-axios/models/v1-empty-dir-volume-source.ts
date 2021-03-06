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


import { ResourceQuantity } from './resource-quantity';

/**
 * 
 * @export
 * @interface V1EmptyDirVolumeSource
 */
export interface V1EmptyDirVolumeSource {
    /**
     * What type of storage medium should back this directory. The default is \"\" which means to use the node\'s default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir +optional
     * @type {string}
     * @memberof V1EmptyDirVolumeSource
     */
    medium?: string;
    /**
     * 
     * @type {ResourceQuantity}
     * @memberof V1EmptyDirVolumeSource
     */
    sizeLimit?: ResourceQuantity;
}


