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


import { GormDeletedAt } from './gorm-deleted-at';

/**
 * 
 * @export
 * @interface IntegrationsHelmRepoTokenCache
 */
export interface IntegrationsHelmRepoTokenCache {
    /**
     * 
     * @type {string}
     * @memberof IntegrationsHelmRepoTokenCache
     */
    CreatedAt?: string;
    /**
     * 
     * @type {GormDeletedAt}
     * @memberof IntegrationsHelmRepoTokenCache
     */
    DeletedAt?: GormDeletedAt;
    /**
     * 
     * @type {number}
     * @memberof IntegrationsHelmRepoTokenCache
     */
    ID?: number;
    /**
     * 
     * @type {string}
     * @memberof IntegrationsHelmRepoTokenCache
     */
    UpdatedAt?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof IntegrationsHelmRepoTokenCache
     */
    access_token?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof IntegrationsHelmRepoTokenCache
     */
    expiry?: string;
    /**
     * 
     * @type {number}
     * @memberof IntegrationsHelmRepoTokenCache
     */
    helm_repo_id?: number;
}


