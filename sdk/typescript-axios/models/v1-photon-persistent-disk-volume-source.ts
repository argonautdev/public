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
 * @interface V1PhotonPersistentDiskVolumeSource
 */
export interface V1PhotonPersistentDiskVolumeSource {
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
     * @type {string}
     * @memberof V1PhotonPersistentDiskVolumeSource
     */
    fsType?: string;
    /**
     * ID that identifies Photon Controller persistent disk
     * @type {string}
     * @memberof V1PhotonPersistentDiskVolumeSource
     */
    pdID?: string;
}


