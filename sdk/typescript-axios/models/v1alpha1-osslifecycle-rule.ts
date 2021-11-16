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
 * @interface V1alpha1OSSLifecycleRule
 */
export interface V1alpha1OSSLifecycleRule {
    /**
     * MarkDeletionAfterDays is the number of days before we delete objects in the bucket
     * @type {number}
     * @memberof V1alpha1OSSLifecycleRule
     */
    markDeletionAfterDays?: number;
    /**
     * MarkInfrequentAccessAfterDays is the number of days before we convert the objects in the bucket to Infrequent Access (IA) storage type
     * @type {number}
     * @memberof V1alpha1OSSLifecycleRule
     */
    markInfrequentAccessAfterDays?: number;
}


