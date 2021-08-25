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



/**
 * 
 * @export
 * @interface EksProvider
 */
export interface EksProvider {
    /**
     * Amazon Resource Name (ARN) or alias of the KMS key. The KMS key must be symmetric, created in the same region as the cluster, and if the KMS key was created in a different account, the user must have access to the KMS key. For more information, see Allowing Users in Other Accounts to Use a KMS key (https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html) in the AWS Key Management Service Developer Guide.
     * @type {string}
     * @memberof EksProvider
     */
    KeyArn?: string;
}

