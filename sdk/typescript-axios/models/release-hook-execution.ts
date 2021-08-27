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
 * @interface ReleaseHookExecution
 */
export interface ReleaseHookExecution {
    /**
     * CompletedAt indicates the date/time this hook was completed.
     * @type {string}
     * @memberof ReleaseHookExecution
     */
    completed_at?: string;
    /**
     * Phase indicates whether the hook completed successfully
     * @type {string}
     * @memberof ReleaseHookExecution
     */
    phase?: string;
    /**
     * StartedAt indicates the date/time this hook was started
     * @type {string}
     * @memberof ReleaseHookExecution
     */
    started_at?: string;
}


