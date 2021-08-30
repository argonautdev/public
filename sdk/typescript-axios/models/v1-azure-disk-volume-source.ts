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
 * @interface V1AzureDiskVolumeSource
 */
export interface V1AzureDiskVolumeSource {
    /**
     * Host Caching mode: None, Read Only, Read Write. +optional
     * @type {string}
     * @memberof V1AzureDiskVolumeSource
     */
    cachingMode?: string;
    /**
     * The Name of the data disk in the blob storage
     * @type {string}
     * @memberof V1AzureDiskVolumeSource
     */
    diskName?: string;
    /**
     * The URI the data disk in the blob storage
     * @type {string}
     * @memberof V1AzureDiskVolumeSource
     */
    diskURI?: string;
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. +optional
     * @type {string}
     * @memberof V1AzureDiskVolumeSource
     */
    fsType?: string;
    /**
     * Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared
     * @type {string}
     * @memberof V1AzureDiskVolumeSource
     */
    kind?: string;
    /**
     * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. +optional
     * @type {boolean}
     * @memberof V1AzureDiskVolumeSource
     */
    readOnly?: boolean;
}


