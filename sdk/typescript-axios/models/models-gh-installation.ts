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

/**
 * 
 * @export
 * @interface ModelsGhInstallation
 */
export interface ModelsGhInstallation {
    /**
     * 
     * @type {string}
     * @memberof ModelsGhInstallation
     */
    CreatedAt?: string;
    /**
     * 
     * @type {GormDeletedAt}
     * @memberof ModelsGhInstallation
     */
    DeletedAt?: GormDeletedAt;
    /**
     * 
     * @type {number}
     * @memberof ModelsGhInstallation
     */
    ID?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsGhInstallation
     */
    UpdatedAt?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsGhInstallation
     */
    accountID?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsGhInstallation
     */
    accountOwner?: string;
    /**
     * The organization that this integration belongs to
     * @type {number}
     * @memberof ModelsGhInstallation
     */
    organizationID?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsGhInstallation
     */
    targetType?: string;
}


