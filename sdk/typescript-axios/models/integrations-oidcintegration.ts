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
 * @interface IntegrationsOIDCIntegration
 */
export interface IntegrationsOIDCIntegration {
    /**
     * 
     * @type {string}
     * @memberof IntegrationsOIDCIntegration
     */
    CreatedAt?: string;
    /**
     * 
     * @type {GormDeletedAt}
     * @memberof IntegrationsOIDCIntegration
     */
    DeletedAt?: GormDeletedAt;
    /**
     * 
     * @type {number}
     * @memberof IntegrationsOIDCIntegration
     */
    ID?: number;
    /**
     * 
     * @type {string}
     * @memberof IntegrationsOIDCIntegration
     */
    UpdatedAt?: string;
    /**
     * The name of the auth mechanism
     * @type {string}
     * @memberof IntegrationsOIDCIntegration
     */
    client?: string;
    /**
     * The ID issued to the Relying Party
     * @type {Array<number>}
     * @memberof IntegrationsOIDCIntegration
     */
    client_id?: Array<number>;
    /**
     * The secret issued to the Relying Party  This is present because it used to be a required field in a kubeconfig. However, because the kube apiserver acts as a Relying Party, the client secret is not necessary.
     * @type {Array<number>}
     * @memberof IntegrationsOIDCIntegration
     */
    client_secret?: Array<number>;
    /**
     * The user\'s JWT id token
     * @type {Array<number>}
     * @memberof IntegrationsOIDCIntegration
     */
    id_token?: Array<number>;
    /**
     * The CA data -- certificate check must be performed (16.17)
     * @type {Array<number>}
     * @memberof IntegrationsOIDCIntegration
     */
    idp_certificate_authority_data?: Array<number>;
    /**
     * The \"Issuer Identifier\" of the OIDC spec (16.15)
     * @type {Array<number>}
     * @memberof IntegrationsOIDCIntegration
     */
    idp_issuer_url?: Array<number>;
    /**
     * The Organization that this integration belongs to
     * @type {number}
     * @memberof IntegrationsOIDCIntegration
     */
    organization_id?: number;
    /**
     * The user\'s refresh token
     * @type {Array<number>}
     * @memberof IntegrationsOIDCIntegration
     */
    refresh_token?: Array<number>;
    /**
     * The id of the user that linked this auth mechanism
     * @type {number}
     * @memberof IntegrationsOIDCIntegration
     */
    user_id?: number;
}


