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


import { EksProvider } from './eks-provider';

/**
 * 
 * @export
 * @interface EksEncryptionConfig
 */
export interface EksEncryptionConfig {
    /**
     * 
     * @type {EksProvider}
     * @memberof EksEncryptionConfig
     */
    Provider?: EksProvider;
    /**
     * Specifies the resources to be encrypted. The only supported value is \"secrets\".
     * @type {Array<string>}
     * @memberof EksEncryptionConfig
     */
    Resources?: Array<string>;
}


