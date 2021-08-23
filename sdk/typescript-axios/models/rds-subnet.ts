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


import { RdsAvailabilityZone } from './rds-availability-zone';
import { RdsOutpost } from './rds-outpost';

/**
 * 
 * @export
 * @interface RdsSubnet
 */
export interface RdsSubnet {
    /**
     * 
     * @type {RdsAvailabilityZone}
     * @memberof RdsSubnet
     */
    SubnetAvailabilityZone?: RdsAvailabilityZone;
    /**
     * The identifier of the subnet.
     * @type {string}
     * @memberof RdsSubnet
     */
    SubnetIdentifier?: string;
    /**
     * 
     * @type {RdsOutpost}
     * @memberof RdsSubnet
     */
    SubnetOutpost?: RdsOutpost;
    /**
     * The status of the subnet.
     * @type {string}
     * @memberof RdsSubnet
     */
    SubnetStatus?: string;
}


