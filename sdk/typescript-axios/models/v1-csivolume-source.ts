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


import { V1LocalObjectReference } from './v1-local-object-reference';

/**
 * 
 * @export
 * @interface V1CSIVolumeSource
 */
export interface V1CSIVolumeSource {
    /**
     * Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
     * @type {string}
     * @memberof V1CSIVolumeSource
     */
    driver?: string;
    /**
     * Filesystem type to mount. Ex. \"ext4\", \"xfs\", \"ntfs\". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply. +optional
     * @type {string}
     * @memberof V1CSIVolumeSource
     */
    fsType?: string;
    /**
     * 
     * @type {V1LocalObjectReference}
     * @memberof V1CSIVolumeSource
     */
    nodePublishSecretRef?: V1LocalObjectReference;
    /**
     * Specifies a read-only configuration for the volume. Defaults to false (read/write). +optional
     * @type {boolean}
     * @memberof V1CSIVolumeSource
     */
    readOnly?: boolean;
    /**
     * VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver\'s documentation for supported values. +optional
     * @type {{ [key: string]: string; }}
     * @memberof V1CSIVolumeSource
     */
    volumeAttributes?: { [key: string]: string; };
}

