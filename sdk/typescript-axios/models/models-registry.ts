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
import { IntegrationsRegTokenCache } from './integrations-reg-token-cache';

/**
 * 
 * @export
 * @interface ModelsRegistry
 */
export interface ModelsRegistry {
    /**
     * 
     * @type {number}
     * @memberof ModelsRegistry
     */
    AWSIntegrationID?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsRegistry
     */
    BasicIntegrationID?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsRegistry
     */
    CreatedAt?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsRegistry
     */
    DOIntegrationID?: number;
    /**
     * 
     * @type {GormDeletedAt}
     * @memberof ModelsRegistry
     */
    DeletedAt?: GormDeletedAt;
    /**
     * 
     * @type {number}
     * @memberof ModelsRegistry
     */
    GCPIntegrationID?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsRegistry
     */
    ID?: number;
    /**
     * 
     * @type {IntegrationsRegTokenCache}
     * @memberof ModelsRegistry
     */
    TokenCache?: IntegrationsRegTokenCache;
    /**
     * 
     * @type {string}
     * @memberof ModelsRegistry
     */
    UpdatedAt?: string;
    /**
     * Private connection connector auth
     * @type {string}
     * @memberof ModelsRegistry
     */
    auth_token?: string;
    /**
     * Kind of the registry
     * @type {string}
     * @memberof ModelsRegistry
     */
    kind?: string;
    /**
     * The module id, if registry was provisioned with Argonaut
     * @type {number}
     * @memberof ModelsRegistry
     */
    module_id?: number;
    /**
     * Name of the registry
     * @type {string}
     * @memberof ModelsRegistry
     */
    name?: string;
    /**
     * The Organization that this integration belongs to
     * @type {number}
     * @memberof ModelsRegistry
     */
    organization_id?: number;
    /**
     * URL of the registry
     * @type {string}
     * @memberof ModelsRegistry
     */
    url?: string;
}


