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


import { ModelsEnvironment } from './models-environment';
import { ModelsJob } from './models-job';

/**
 * 
 * @export
 * @interface V1TerragruntParserResponse
 */
export interface V1TerragruntParserResponse {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof V1TerragruntParserResponse
     */
    data?: { [key: string]: string; };
    /**
     * 
     * @type {ModelsEnvironment}
     * @memberof V1TerragruntParserResponse
     */
    environment?: ModelsEnvironment;
    /**
     * 
     * @type {ModelsJob}
     * @memberof V1TerragruntParserResponse
     */
    job?: ModelsJob;
}


