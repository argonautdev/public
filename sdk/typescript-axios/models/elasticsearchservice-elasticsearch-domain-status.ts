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


import { ElasticsearchserviceAdvancedSecurityOptions } from './elasticsearchservice-advanced-security-options';
import { ElasticsearchserviceCognitoOptions } from './elasticsearchservice-cognito-options';
import { ElasticsearchserviceDomainEndpointOptions } from './elasticsearchservice-domain-endpoint-options';
import { ElasticsearchserviceEBSOptions } from './elasticsearchservice-ebsoptions';
import { ElasticsearchserviceElasticsearchClusterConfig } from './elasticsearchservice-elasticsearch-cluster-config';
import { ElasticsearchserviceEncryptionAtRestOptions } from './elasticsearchservice-encryption-at-rest-options';
import { ElasticsearchserviceLogPublishingOption } from './elasticsearchservice-log-publishing-option';
import { ElasticsearchserviceNodeToNodeEncryptionOptions } from './elasticsearchservice-node-to-node-encryption-options';
import { ElasticsearchserviceServiceSoftwareOptions } from './elasticsearchservice-service-software-options';
import { ElasticsearchserviceSnapshotOptions } from './elasticsearchservice-snapshot-options';
import { ElasticsearchserviceVPCDerivedInfo } from './elasticsearchservice-vpcderived-info';

/**
 * 
 * @export
 * @interface ElasticsearchserviceElasticsearchDomainStatus
 */
export interface ElasticsearchserviceElasticsearchDomainStatus {
    /**
     * The Amazon resource name (ARN) of an Elasticsearch domain. See Identifiers for IAM Entities (http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html) in Using AWS Identity and Access Management for more information.  ARN is a required field
     * @type {string}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    ARN?: string;
    /**
     * IAM access policy as a JSON-formatted string.
     * @type {string}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    AccessPolicies?: string;
    /**
     * Specifies the status of the AdvancedOptions
     * @type {{ [key: string]: string; }}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    AdvancedOptions?: { [key: string]: string; };
    /**
     * 
     * @type {ElasticsearchserviceAdvancedSecurityOptions}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    AdvancedSecurityOptions?: ElasticsearchserviceAdvancedSecurityOptions;
    /**
     * 
     * @type {ElasticsearchserviceCognitoOptions}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    CognitoOptions?: ElasticsearchserviceCognitoOptions;
    /**
     * The domain creation status. True if the creation of an Elasticsearch domain is complete. False if domain creation is still in progress.
     * @type {boolean}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    Created?: boolean;
    /**
     * The domain deletion status. True if a delete request has been received for the domain but resource cleanup is still in progress. False if the domain has not been deleted. Once domain deletion is complete, the status of the domain is no longer returned.
     * @type {boolean}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    Deleted?: boolean;
    /**
     * 
     * @type {ElasticsearchserviceDomainEndpointOptions}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    DomainEndpointOptions?: ElasticsearchserviceDomainEndpointOptions;
    /**
     * The unique identifier for the specified Elasticsearch domain.  DomainId is a required field
     * @type {string}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    DomainId?: string;
    /**
     * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).  DomainName is a required field
     * @type {string}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    DomainName?: string;
    /**
     * 
     * @type {ElasticsearchserviceEBSOptions}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    EBSOptions?: ElasticsearchserviceEBSOptions;
    /**
     * 
     * @type {ElasticsearchserviceElasticsearchClusterConfig}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    ElasticsearchClusterConfig?: ElasticsearchserviceElasticsearchClusterConfig;
    /**
     * 
     * @type {string}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    ElasticsearchVersion?: string;
    /**
     * 
     * @type {ElasticsearchserviceEncryptionAtRestOptions}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    EncryptionAtRestOptions?: ElasticsearchserviceEncryptionAtRestOptions;
    /**
     * The Elasticsearch domain endpoint that you use to submit index and search requests.
     * @type {string}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    Endpoint?: string;
    /**
     * Map containing the Elasticsearch domain endpoints used to submit index and search requests. Example key, value: \'vpc\',\'vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com\'.
     * @type {{ [key: string]: string; }}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    Endpoints?: { [key: string]: string; };
    /**
     * Log publishing options for the given domain.
     * @type {{ [key: string]: ElasticsearchserviceLogPublishingOption; }}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    LogPublishingOptions?: { [key: string]: ElasticsearchserviceLogPublishingOption; };
    /**
     * 
     * @type {ElasticsearchserviceNodeToNodeEncryptionOptions}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    NodeToNodeEncryptionOptions?: ElasticsearchserviceNodeToNodeEncryptionOptions;
    /**
     * The status of the Elasticsearch domain configuration. True if Amazon Elasticsearch Service is processing configuration changes. False if the configuration is active.
     * @type {boolean}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    Processing?: boolean;
    /**
     * 
     * @type {ElasticsearchserviceServiceSoftwareOptions}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    ServiceSoftwareOptions?: ElasticsearchserviceServiceSoftwareOptions;
    /**
     * 
     * @type {ElasticsearchserviceSnapshotOptions}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    SnapshotOptions?: ElasticsearchserviceSnapshotOptions;
    /**
     * The status of an Elasticsearch domain version upgrade. True if Amazon Elasticsearch Service is undergoing a version upgrade. False if the configuration is active.
     * @type {boolean}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    UpgradeProcessing?: boolean;
    /**
     * 
     * @type {ElasticsearchserviceVPCDerivedInfo}
     * @memberof ElasticsearchserviceElasticsearchDomainStatus
     */
    VPCOptions?: ElasticsearchserviceVPCDerivedInfo;
}


