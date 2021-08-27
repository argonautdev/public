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


import { V1KeyToPath } from './v1-key-to-path';

/**
 * 
 * @export
 * @interface V1ConfigMapProjection
 */
export interface V1ConfigMapProjection {
    /**
     * If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the \'..\' path or start with \'..\'. +optional
     * @type {Array<V1KeyToPath>}
     * @memberof V1ConfigMapProjection
     */
    items?: Array<V1KeyToPath>;
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? +optional
     * @type {string}
     * @memberof V1ConfigMapProjection
     */
    name?: string;
    /**
     * Specify whether the ConfigMap or its keys must be defined +optional
     * @type {boolean}
     * @memberof V1ConfigMapProjection
     */
    optional?: boolean;
}


