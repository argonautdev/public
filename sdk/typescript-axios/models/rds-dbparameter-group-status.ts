/* tslint:disable */
/* eslint-disable */
/**
 * Midgard API Docs
 * This is the docs for midgard api for argonaut
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface RdsDBParameterGroupStatus
 */
export interface RdsDBParameterGroupStatus {
    /**
     * The name of the DB parameter group.
     * @type {string}
     * @memberof RdsDBParameterGroupStatus
     */
    DBParameterGroupName?: string;
    /**
     * The status of parameter updates.
     * @type {string}
     * @memberof RdsDBParameterGroupStatus
     */
    ParameterApplyStatus?: string;
}


