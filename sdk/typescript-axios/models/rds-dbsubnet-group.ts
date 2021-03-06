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


import { RdsSubnet } from './rds-subnet';

/**
 * 
 * @export
 * @interface RdsDBSubnetGroup
 */
export interface RdsDBSubnetGroup {
    /**
     * The Amazon Resource Name (ARN) for the DB subnet group.
     * @type {string}
     * @memberof RdsDBSubnetGroup
     */
    DBSubnetGroupArn?: string;
    /**
     * Provides the description of the DB subnet group.
     * @type {string}
     * @memberof RdsDBSubnetGroup
     */
    DBSubnetGroupDescription?: string;
    /**
     * The name of the DB subnet group.
     * @type {string}
     * @memberof RdsDBSubnetGroup
     */
    DBSubnetGroupName?: string;
    /**
     * Provides the status of the DB subnet group.
     * @type {string}
     * @memberof RdsDBSubnetGroup
     */
    SubnetGroupStatus?: string;
    /**
     * Contains a list of Subnet elements.
     * @type {Array<RdsSubnet>}
     * @memberof RdsDBSubnetGroup
     */
    Subnets?: Array<RdsSubnet>;
    /**
     * Provides the VpcId of the DB subnet group.
     * @type {string}
     * @memberof RdsDBSubnetGroup
     */
    VpcId?: string;
}


