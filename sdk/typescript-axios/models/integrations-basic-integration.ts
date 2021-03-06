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
 * @interface IntegrationsBasicIntegration
 */
export interface IntegrationsBasicIntegration {
    /**
     * 
     * @type {string}
     * @memberof IntegrationsBasicIntegration
     */
    CreatedAt?: string;
    /**
     * 
     * @type {GormDeletedAt}
     * @memberof IntegrationsBasicIntegration
     */
    DeletedAt?: GormDeletedAt;
    /**
     * 
     * @type {number}
     * @memberof IntegrationsBasicIntegration
     */
    ID?: number;
    /**
     * 
     * @type {string}
     * @memberof IntegrationsBasicIntegration
     */
    UpdatedAt?: string;
    /**
     * The Organization that this integration belongs to
     * @type {number}
     * @memberof IntegrationsBasicIntegration
     */
    organization_id?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof IntegrationsBasicIntegration
     */
    password?: Array<number>;
    /**
     * The id of the user that linked this auth mechanism
     * @type {number}
     * @memberof IntegrationsBasicIntegration
     */
    user_id?: number;
    /**
     * Username/Password for basic authentication to a cluster
     * @type {Array<number>}
     * @memberof IntegrationsBasicIntegration
     */
    username?: Array<number>;
}


