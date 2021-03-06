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
 * @interface V1VolumeDevice
 */
export interface V1VolumeDevice {
    /**
     * devicePath is the path inside of the container that the device will be mapped to.
     * @type {string}
     * @memberof V1VolumeDevice
     */
    devicePath?: string;
    /**
     * name must match the name of a persistentVolumeClaim in the pod
     * @type {string}
     * @memberof V1VolumeDevice
     */
    name?: string;
}


