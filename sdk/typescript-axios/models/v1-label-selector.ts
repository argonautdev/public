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


import { V1LabelSelectorRequirement } from './v1-label-selector-requirement';

/**
 * 
 * @export
 * @interface V1LabelSelector
 */
export interface V1LabelSelector {
    /**
     * matchExpressions is a list of label selector requirements. The requirements are ANDed. +optional
     * @type {Array<V1LabelSelectorRequirement>}
     * @memberof V1LabelSelector
     */
    matchExpressions?: Array<V1LabelSelectorRequirement>;
    /**
     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \"key\", the operator is \"In\", and the values array contains only \"value\". The requirements are ANDed. +optional
     * @type {{ [key: string]: string; }}
     * @memberof V1LabelSelector
     */
    matchLabels?: { [key: string]: string; };
}


