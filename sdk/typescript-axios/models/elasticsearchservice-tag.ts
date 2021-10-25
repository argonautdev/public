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
 * @interface ElasticsearchserviceTag
 */
export interface ElasticsearchserviceTag {
    /**
     * Specifies the TagKey, the name of the tag. Tag keys must be unique for the Elasticsearch domain to which they are attached.  Key is a required field
     * @type {string}
     * @memberof ElasticsearchserviceTag
     */
    Key?: string;
    /**
     * Specifies the TagValue, the value assigned to the corresponding tag key. Tag values can be null and do not have to be unique in a tag set. For example, you can have a key value pair in a tag set of project : Trinity and cost-center : Trinity  Value is a required field
     * @type {string}
     * @memberof ElasticsearchserviceTag
     */
    Value?: string;
}


