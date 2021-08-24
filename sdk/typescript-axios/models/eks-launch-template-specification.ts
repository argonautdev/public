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
 * @interface EksLaunchTemplateSpecification
 */
export interface EksLaunchTemplateSpecification {
    /**
     * The ID of the launch template.
     * @type {string}
     * @memberof EksLaunchTemplateSpecification
     */
    Id?: string;
    /**
     * The name of the launch template.
     * @type {string}
     * @memberof EksLaunchTemplateSpecification
     */
    Name?: string;
    /**
     * The version of the launch template to use. If no version is specified, then the template\'s default version is used.
     * @type {string}
     * @memberof EksLaunchTemplateSpecification
     */
    Version?: string;
}


