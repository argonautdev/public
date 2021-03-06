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


import { ElasticachePendingLogDeliveryConfiguration } from './elasticache-pending-log-delivery-configuration';

/**
 * 
 * @export
 * @interface ElasticachePendingModifiedValues
 */
export interface ElasticachePendingModifiedValues {
    /**
     * The auth token status
     * @type {string}
     * @memberof ElasticachePendingModifiedValues
     */
    AuthTokenStatus?: string;
    /**
     * A list of cache node IDs that are being removed (or will be removed) from the cluster. A node ID is a 4-digit numeric identifier (0001, 0002, etc.).
     * @type {Array<string>}
     * @memberof ElasticachePendingModifiedValues
     */
    CacheNodeIdsToRemove?: Array<string>;
    /**
     * The cache node type that this cluster or replication group is scaled to.
     * @type {string}
     * @memberof ElasticachePendingModifiedValues
     */
    CacheNodeType?: string;
    /**
     * The new cache engine version that the cluster runs.
     * @type {string}
     * @memberof ElasticachePendingModifiedValues
     */
    EngineVersion?: string;
    /**
     * The log delivery configurations being modified
     * @type {Array<ElasticachePendingLogDeliveryConfiguration>}
     * @memberof ElasticachePendingModifiedValues
     */
    LogDeliveryConfigurations?: Array<ElasticachePendingLogDeliveryConfiguration>;
    /**
     * The new number of cache nodes for the cluster.  For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 40.
     * @type {number}
     * @memberof ElasticachePendingModifiedValues
     */
    NumCacheNodes?: number;
}


