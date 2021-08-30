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
 * @interface V1StorageOSVolumeSource
 */
export interface V1StorageOSVolumeSource {
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. +optional
     * @type {string}
     * @memberof V1StorageOSVolumeSource
     */
    fsType?: string;
    /**
     * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. +optional
     * @type {boolean}
     * @memberof V1StorageOSVolumeSource
     */
    readOnly?: boolean;
    /**
     * 
     * @type {V1LocalObjectReference}
     * @memberof V1StorageOSVolumeSource
     */
    secretRef?: V1LocalObjectReference;
    /**
     * VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
     * @type {string}
     * @memberof V1StorageOSVolumeSource
     */
    volumeName?: string;
    /**
     * VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod\'s namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to \"default\" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created. +optional
     * @type {string}
     * @memberof V1StorageOSVolumeSource
     */
    volumeNamespace?: string;
}


