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



/**
 * 
 * @export
 * @interface ElasticsearchserviceCognitoOptions
 */
export interface ElasticsearchserviceCognitoOptions {
    /**
     * Specifies the option to enable Cognito for Kibana authentication.
     * @type {boolean}
     * @memberof ElasticsearchserviceCognitoOptions
     */
    Enabled?: boolean;
    /**
     * Specifies the Cognito identity pool ID for Kibana authentication.
     * @type {string}
     * @memberof ElasticsearchserviceCognitoOptions
     */
    IdentityPoolId?: string;
    /**
     * Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.
     * @type {string}
     * @memberof ElasticsearchserviceCognitoOptions
     */
    RoleArn?: string;
    /**
     * Specifies the Cognito user pool ID for Kibana authentication.
     * @type {string}
     * @memberof ElasticsearchserviceCognitoOptions
     */
    UserPoolId?: string;
}


