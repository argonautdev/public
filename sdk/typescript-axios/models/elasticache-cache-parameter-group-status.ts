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
 * @interface ElasticacheCacheParameterGroupStatus
 */
export interface ElasticacheCacheParameterGroupStatus {
    /**
     * A list of the cache node IDs which need to be rebooted for parameter changes to be applied. A node ID is a numeric identifier (0001, 0002, etc.).
     * @type {Array<string>}
     * @memberof ElasticacheCacheParameterGroupStatus
     */
    CacheNodeIdsToReboot?: Array<string>;
    /**
     * The name of the cache parameter group.
     * @type {string}
     * @memberof ElasticacheCacheParameterGroupStatus
     */
    CacheParameterGroupName?: string;
    /**
     * The status of parameter updates.
     * @type {string}
     * @memberof ElasticacheCacheParameterGroupStatus
     */
    ParameterApplyStatus?: string;
}


