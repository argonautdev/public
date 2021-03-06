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
 * @interface EksLogSetup
 */
export interface EksLogSetup {
    /**
     * If a log type is enabled, that log type exports its control plane logs to CloudWatch Logs. If a log type isn\'t enabled, that log type doesn\'t export its control plane logs. Each individual log type can be enabled or disabled independently.
     * @type {boolean}
     * @memberof EksLogSetup
     */
    Enabled?: boolean;
    /**
     * The available cluster control plane log types.
     * @type {Array<string>}
     * @memberof EksLogSetup
     */
    Types?: Array<string>;
}


