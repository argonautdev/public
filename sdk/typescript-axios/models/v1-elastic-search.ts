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
 * @interface V1ElasticSearch
 */
export interface V1ElasticSearch {
    /**
     * 
     * @type {number}
     * @memberof V1ElasticSearch
     */
    availability_zone_count?: number;
    /**
     * 
     * @type {string}
     * @memberof V1ElasticSearch
     */
    domain_name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ElasticSearch
     */
    instance_type?: string;
    /**
     * 
     * @type {number}
     * @memberof V1ElasticSearch
     */
    instances_per_az?: number;
    /**
     * 
     * @type {string}
     * @memberof V1ElasticSearch
     */
    is_public?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ElasticSearch
     */
    master_user_name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ElasticSearch
     */
    master_user_password?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ElasticSearch
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof V1ElasticSearch
     */
    volume_size?: number;
}


