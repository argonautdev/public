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


import { ElasticacheEndpoint } from './elasticache-endpoint';

/**
 * 
 * @export
 * @interface ElasticacheCacheNode
 */
export interface ElasticacheCacheNode {
    /**
     * The date and time when the cache node was created.
     * @type {string}
     * @memberof ElasticacheCacheNode
     */
    cacheNodeCreateTime?: string;
    /**
     * The cache node identifier. A node ID is a numeric identifier (0001, 0002, etc.). The combination of cluster ID and node ID uniquely identifies every cache node used in a customer\'s AWS account.
     * @type {string}
     * @memberof ElasticacheCacheNode
     */
    cacheNodeId?: string;
    /**
     * The current state of this cache node, one of the following values: available, creating, rebooting, or deleting.
     * @type {string}
     * @memberof ElasticacheCacheNode
     */
    cacheNodeStatus?: string;
    /**
     * The Availability Zone where this node was created and now resides.
     * @type {string}
     * @memberof ElasticacheCacheNode
     */
    customerAvailabilityZone?: string;
    /**
     * The customer outpost ARN of the cache node.
     * @type {string}
     * @memberof ElasticacheCacheNode
     */
    customerOutpostArn?: string;
    /**
     * 
     * @type {ElasticacheEndpoint}
     * @memberof ElasticacheCacheNode
     */
    endpoint?: ElasticacheEndpoint;
    /**
     * The status of the parameter group applied to this cache node.
     * @type {string}
     * @memberof ElasticacheCacheNode
     */
    parameterGroupStatus?: string;
    /**
     * The ID of the primary node to which this read replica node is synchronized. If this field is empty, this node is not associated with a primary cluster.
     * @type {string}
     * @memberof ElasticacheCacheNode
     */
    sourceCacheNodeId?: string;
}


