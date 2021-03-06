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
 * @interface V1ISCSIVolumeSource
 */
export interface V1ISCSIVolumeSource {
    /**
     * whether support iSCSI Discovery CHAP authentication +optional
     * @type {boolean}
     * @memberof V1ISCSIVolumeSource
     */
    chapAuthDiscovery?: boolean;
    /**
     * whether support iSCSI Session CHAP authentication +optional
     * @type {boolean}
     * @memberof V1ISCSIVolumeSource
     */
    chapAuthSession?: boolean;
    /**
     * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi TODO: how do we prevent errors in the filesystem from compromising the machine +optional
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    fsType?: string;
    /**
     * Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection. +optional
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    initiatorName?: string;
    /**
     * Target iSCSI Qualified Name.
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    iqn?: string;
    /**
     * iSCSI Interface Name that uses an iSCSI transport. Defaults to \'default\' (tcp). +optional
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    iscsiInterface?: string;
    /**
     * iSCSI Target Lun number.
     * @type {number}
     * @memberof V1ISCSIVolumeSource
     */
    lun?: number;
    /**
     * iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). +optional
     * @type {Array<string>}
     * @memberof V1ISCSIVolumeSource
     */
    portals?: Array<string>;
    /**
     * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. +optional
     * @type {boolean}
     * @memberof V1ISCSIVolumeSource
     */
    readOnly?: boolean;
    /**
     * 
     * @type {V1LocalObjectReference}
     * @memberof V1ISCSIVolumeSource
     */
    secretRef?: V1LocalObjectReference;
    /**
     * iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    targetPortal?: string;
}


