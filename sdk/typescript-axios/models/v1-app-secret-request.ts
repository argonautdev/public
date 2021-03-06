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


import { V1EnvironmentRequest } from './v1-environment-request';

/**
 * 
 * @export
 * @interface V1AppSecretRequest
 */
export interface V1AppSecretRequest {
    /**
     * 
     * @type {string}
     * @memberof V1AppSecretRequest
     */
    app_name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1AppSecretRequest
     */
    cluster_name?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof V1AppSecretRequest
     */
    env_from_string?: { [key: string]: string; };
    /**
     * 
     * @type {V1EnvironmentRequest}
     * @memberof V1AppSecretRequest
     */
    environment?: V1EnvironmentRequest;
}


