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


import { V1EnvVarSource } from './v1-env-var-source';

/**
 * 
 * @export
 * @interface V1EnvVar
 */
export interface V1EnvVar {
    /**
     * Name of the environment variable. Must be a C_IDENTIFIER.
     * @type {string}
     * @memberof V1EnvVar
     */
    name?: string;
    /**
     * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to \"\". +optional
     * @type {string}
     * @memberof V1EnvVar
     */
    value?: string;
    /**
     * 
     * @type {V1EnvVarSource}
     * @memberof V1EnvVar
     */
    valueFrom?: V1EnvVarSource;
}


