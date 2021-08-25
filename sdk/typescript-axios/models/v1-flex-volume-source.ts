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


import { V1LocalObjectReference } from './v1-local-object-reference';

/**
 * 
 * @export
 * @interface V1FlexVolumeSource
 */
export interface V1FlexVolumeSource {
    /**
     * Driver is the name of the driver to use for this volume.
     * @type {string}
     * @memberof V1FlexVolumeSource
     */
    driver?: string;
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". The default filesystem depends on FlexVolume script. +optional
     * @type {string}
     * @memberof V1FlexVolumeSource
     */
    fsType?: string;
    /**
     * Optional: Extra command options if any. +optional
     * @type {{ [key: string]: string; }}
     * @memberof V1FlexVolumeSource
     */
    options?: { [key: string]: string; };
    /**
     * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. +optional
     * @type {boolean}
     * @memberof V1FlexVolumeSource
     */
    readOnly?: boolean;
    /**
     * 
     * @type {V1LocalObjectReference}
     * @memberof V1FlexVolumeSource
     */
    secretRef?: V1LocalObjectReference;
}


