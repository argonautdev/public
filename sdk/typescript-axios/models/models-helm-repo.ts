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


import { GormDeletedAt } from './gorm-deleted-at';
import { IntegrationsHelmRepoTokenCache } from './integrations-helm-repo-token-cache';

/**
 * 
 * @export
 * @interface ModelsHelmRepo
 */
export interface ModelsHelmRepo {
    /**
     * 
     * @type {number}
     * @memberof ModelsHelmRepo
     */
    AWSIntegrationID?: number;
    /**
     * ------------------------------------------------------------------ All fields below this line are encrypted before storage ------------------------------------------------------------------
     * @type {number}
     * @memberof ModelsHelmRepo
     */
    BasicAuthIntegrationID?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsHelmRepo
     */
    CreatedAt?: string;
    /**
     * 
     * @type {GormDeletedAt}
     * @memberof ModelsHelmRepo
     */
    DeletedAt?: GormDeletedAt;
    /**
     * 
     * @type {number}
     * @memberof ModelsHelmRepo
     */
    GCPIntegrationID?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsHelmRepo
     */
    ID?: number;
    /**
     * 
     * @type {IntegrationsHelmRepoTokenCache}
     * @memberof ModelsHelmRepo
     */
    TokenCache?: IntegrationsHelmRepoTokenCache;
    /**
     * 
     * @type {string}
     * @memberof ModelsHelmRepo
     */
    UpdatedAt?: string;
    /**
     * The cluster this repo is connected to
     * @type {number}
     * @memberof ModelsHelmRepo
     */
    cluster_id?: number;
    /**
     * Name given to the Helm repository
     * @type {string}
     * @memberof ModelsHelmRepo
     */
    name?: string;
    /**
     * The organization that this integration belongs to
     * @type {number}
     * @memberof ModelsHelmRepo
     */
    organization_id?: number;
    /**
     * RepoURL is the URL to the helm repo. This varies based on the integration type. For example, for AWS S3 this may be prefixed with s3://, or for GCS it may be gs://
     * @type {string}
     * @memberof ModelsHelmRepo
     */
    repo_url?: string;
}


