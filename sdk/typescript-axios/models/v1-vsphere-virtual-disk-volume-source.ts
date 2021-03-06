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
 * @interface V1VsphereVirtualDiskVolumeSource
 */
export interface V1VsphereVirtualDiskVolumeSource {
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. +optional
     * @type {string}
     * @memberof V1VsphereVirtualDiskVolumeSource
     */
    fsType?: string;
    /**
     * Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName. +optional
     * @type {string}
     * @memberof V1VsphereVirtualDiskVolumeSource
     */
    storagePolicyID?: string;
    /**
     * Storage Policy Based Management (SPBM) profile name. +optional
     * @type {string}
     * @memberof V1VsphereVirtualDiskVolumeSource
     */
    storagePolicyName?: string;
    /**
     * Path that identifies vSphere volume vmdk
     * @type {string}
     * @memberof V1VsphereVirtualDiskVolumeSource
     */
    volumePath?: string;
}


