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


import { ElasticsearchserviceAccessPoliciesStatus } from './elasticsearchservice-access-policies-status';
import { ElasticsearchserviceAdvancedOptionsStatus } from './elasticsearchservice-advanced-options-status';
import { ElasticsearchserviceAdvancedSecurityOptionsStatus } from './elasticsearchservice-advanced-security-options-status';
import { ElasticsearchserviceAutoTuneOptionsStatus } from './elasticsearchservice-auto-tune-options-status';
import { ElasticsearchserviceCognitoOptionsStatus } from './elasticsearchservice-cognito-options-status';
import { ElasticsearchserviceDomainEndpointOptionsStatus } from './elasticsearchservice-domain-endpoint-options-status';
import { ElasticsearchserviceEBSOptionsStatus } from './elasticsearchservice-ebsoptions-status';
import { ElasticsearchserviceElasticsearchClusterConfigStatus } from './elasticsearchservice-elasticsearch-cluster-config-status';
import { ElasticsearchserviceElasticsearchVersionStatus } from './elasticsearchservice-elasticsearch-version-status';
import { ElasticsearchserviceEncryptionAtRestOptionsStatus } from './elasticsearchservice-encryption-at-rest-options-status';
import { ElasticsearchserviceLogPublishingOptionsStatus } from './elasticsearchservice-log-publishing-options-status';
import { ElasticsearchserviceNodeToNodeEncryptionOptionsStatus } from './elasticsearchservice-node-to-node-encryption-options-status';
import { ElasticsearchserviceSnapshotOptionsStatus } from './elasticsearchservice-snapshot-options-status';
import { ElasticsearchserviceVPCDerivedInfoStatus } from './elasticsearchservice-vpcderived-info-status';

/**
 * 
 * @export
 * @interface ElasticsearchserviceElasticsearchDomainConfig
 */
export interface ElasticsearchserviceElasticsearchDomainConfig {
    /**
     * 
     * @type {ElasticsearchserviceAccessPoliciesStatus}
     * @memberof ElasticsearchserviceElasticsearchDomainConfig
     */
    AccessPolicies?: ElasticsearchserviceAccessPoliciesStatus;
    /**
     * 
     * @type {ElasticsearchserviceAdvancedOptionsStatus}
     * @memberof ElasticsearchserviceElasticsearchDomainConfig
     */
    AdvancedOptions?: ElasticsearchserviceAdvancedOptionsStatus;
    /**
     * 
     * @type {ElasticsearchserviceAdvancedSecurityOptionsStatus}
     * @memberof ElasticsearchserviceElasticsearchDomainConfig
     */
    AdvancedSecurityOptions?: ElasticsearchserviceAdvancedSecurityOptionsStatus;
    /**
     * 
     * @type {ElasticsearchserviceAutoTuneOptionsStatus}
     * @memberof ElasticsearchserviceElasticsearchDomainConfig
     */
    AutoTuneOptions?: ElasticsearchserviceAutoTuneOptionsStatus;
    /**
     * 
     * @type {ElasticsearchserviceCognitoOptionsStatus}
     * @memberof ElasticsearchserviceElasticsearchDomainConfig
     */
    CognitoOptions?: ElasticsearchserviceCognitoOptionsStatus;
    /**
     * 
     * @type {ElasticsearchserviceDomainEndpointOptionsStatus}
     * @memberof ElasticsearchserviceElasticsearchDomainConfig
     */
    DomainEndpointOptions?: ElasticsearchserviceDomainEndpointOptionsStatus;
    /**
     * 
     * @type {ElasticsearchserviceEBSOptionsStatus}
     * @memberof ElasticsearchserviceElasticsearchDomainConfig
     */
    EBSOptions?: ElasticsearchserviceEBSOptionsStatus;
    /**
     * 
     * @type {ElasticsearchserviceElasticsearchClusterConfigStatus}
     * @memberof ElasticsearchserviceElasticsearchDomainConfig
     */
    ElasticsearchClusterConfig?: ElasticsearchserviceElasticsearchClusterConfigStatus;
    /**
     * 
     * @type {ElasticsearchserviceElasticsearchVersionStatus}
     * @memberof ElasticsearchserviceElasticsearchDomainConfig
     */
    ElasticsearchVersion?: ElasticsearchserviceElasticsearchVersionStatus;
    /**
     * 
     * @type {ElasticsearchserviceEncryptionAtRestOptionsStatus}
     * @memberof ElasticsearchserviceElasticsearchDomainConfig
     */
    EncryptionAtRestOptions?: ElasticsearchserviceEncryptionAtRestOptionsStatus;
    /**
     * 
     * @type {ElasticsearchserviceLogPublishingOptionsStatus}
     * @memberof ElasticsearchserviceElasticsearchDomainConfig
     */
    LogPublishingOptions?: ElasticsearchserviceLogPublishingOptionsStatus;
    /**
     * 
     * @type {ElasticsearchserviceNodeToNodeEncryptionOptionsStatus}
     * @memberof ElasticsearchserviceElasticsearchDomainConfig
     */
    NodeToNodeEncryptionOptions?: ElasticsearchserviceNodeToNodeEncryptionOptionsStatus;
    /**
     * 
     * @type {ElasticsearchserviceSnapshotOptionsStatus}
     * @memberof ElasticsearchserviceElasticsearchDomainConfig
     */
    SnapshotOptions?: ElasticsearchserviceSnapshotOptionsStatus;
    /**
     * 
     * @type {ElasticsearchserviceVPCDerivedInfoStatus}
     * @memberof ElasticsearchserviceElasticsearchDomainConfig
     */
    VPCOptions?: ElasticsearchserviceVPCDerivedInfoStatus;
}

