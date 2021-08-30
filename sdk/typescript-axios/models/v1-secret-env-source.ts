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
 * @interface V1SecretEnvSource
 */
export interface V1SecretEnvSource {
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? +optional
     * @type {string}
     * @memberof V1SecretEnvSource
     */
    name?: string;
    /**
     * Specify whether the Secret must be defined +optional
     * @type {boolean}
     * @memberof V1SecretEnvSource
     */
    optional?: boolean;
}


