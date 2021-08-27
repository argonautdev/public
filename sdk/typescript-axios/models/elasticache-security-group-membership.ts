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
 * @interface ElasticacheSecurityGroupMembership
 */
export interface ElasticacheSecurityGroupMembership {
    /**
     * The identifier of the cache security group.
     * @type {string}
     * @memberof ElasticacheSecurityGroupMembership
     */
    SecurityGroupId?: string;
    /**
     * The status of the cache security group membership. The status changes whenever a cache security group is modified, or when the cache security groups assigned to a cluster are modified.
     * @type {string}
     * @memberof ElasticacheSecurityGroupMembership
     */
    Status?: string;
}


