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


import { V1SecretKeySelector } from './v1-secret-key-selector';

/**
 * 
 * @export
 * @interface V1alpha1S3EncryptionOptions
 */
export interface V1alpha1S3EncryptionOptions {
    /**
     * EnableEncryption tells the driver to encrypt objects if set to true. If kmsKeyId and serverSideCustomerKeySecret are not set, SSE-S3 will be used
     * @type {boolean}
     * @memberof V1alpha1S3EncryptionOptions
     */
    enableEncryption?: boolean;
    /**
     * KmsEncryptionContext is a json blob that contains an encryption context. See https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context for more information
     * @type {string}
     * @memberof V1alpha1S3EncryptionOptions
     */
    kmsEncryptionContext?: string;
    /**
     * KMSKeyId tells the driver to encrypt the object using the specified KMS Key.
     * @type {string}
     * @memberof V1alpha1S3EncryptionOptions
     */
    kmsKeyId?: string;
    /**
     * 
     * @type {V1SecretKeySelector}
     * @memberof V1alpha1S3EncryptionOptions
     */
    serverSideCustomerKeySecret?: V1SecretKeySelector;
}


