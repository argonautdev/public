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
 * @interface ElasticacheCacheSecurityGroupMembership
 */
export interface ElasticacheCacheSecurityGroupMembership {
    /**
     * The name of the cache security group.
     * @type {string}
     * @memberof ElasticacheCacheSecurityGroupMembership
     */
    cacheSecurityGroupName?: string;
    /**
     * The membership status in the cache security group. The status changes when a cache security group is modified, or when the cache security groups assigned to a cluster are modified.
     * @type {string}
     * @memberof ElasticacheCacheSecurityGroupMembership
     */
    status?: string;
}


