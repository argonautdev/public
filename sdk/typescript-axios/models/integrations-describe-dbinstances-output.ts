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


import { RdsDescribeDBInstancesOutput } from './rds-describe-dbinstances-output';

/**
 * 
 * @export
 * @interface IntegrationsDescribeDBInstancesOutput
 */
export interface IntegrationsDescribeDBInstancesOutput {
    /**
     * 
     * @type {RdsDescribeDBInstancesOutput}
     * @memberof IntegrationsDescribeDBInstancesOutput
     */
    RDS?: RdsDescribeDBInstancesOutput;
    /**
     * 
     * @type {string}
     * @memberof IntegrationsDescribeDBInstancesOutput
     */
    region?: string;
}

