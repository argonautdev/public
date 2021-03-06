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


import { V1ObjectFieldSelector } from './v1-object-field-selector';
import { V1ResourceFieldSelector } from './v1-resource-field-selector';

/**
 * 
 * @export
 * @interface V1DownwardAPIVolumeFile
 */
export interface V1DownwardAPIVolumeFile {
    /**
     * 
     * @type {V1ObjectFieldSelector}
     * @memberof V1DownwardAPIVolumeFile
     */
    fieldRef?: V1ObjectFieldSelector;
    /**
     * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. +optional
     * @type {number}
     * @memberof V1DownwardAPIVolumeFile
     */
    mode?: number;
    /**
     * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the \'..\' path. Must be utf-8 encoded. The first item of the relative path must not start with \'..\'
     * @type {string}
     * @memberof V1DownwardAPIVolumeFile
     */
    path?: string;
    /**
     * 
     * @type {V1ResourceFieldSelector}
     * @memberof V1DownwardAPIVolumeFile
     */
    resourceFieldRef?: V1ResourceFieldSelector;
}


