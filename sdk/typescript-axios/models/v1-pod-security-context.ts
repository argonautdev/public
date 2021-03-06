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


import { V1SELinuxOptions } from './v1-selinux-options';
import { V1SeccompProfile } from './v1-seccomp-profile';
import { V1Sysctl } from './v1-sysctl';
import { V1WindowsSecurityContextOptions } from './v1-windows-security-context-options';

/**
 * 
 * @export
 * @interface V1PodSecurityContext
 */
export interface V1PodSecurityContext {
    /**
     * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:  1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR\'d with rw-rw----  If unset, the Kubelet will not modify the ownership and permissions of any volume. +optional
     * @type {number}
     * @memberof V1PodSecurityContext
     */
    fsGroup?: number;
    /**
     * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are \"OnRootMismatch\" and \"Always\". If not specified, \"Always\" is used. +optional
     * @type {string}
     * @memberof V1PodSecurityContext
     */
    fsGroupChangePolicy?: string;
    /**
     * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. +optional
     * @type {number}
     * @memberof V1PodSecurityContext
     */
    runAsGroup?: number;
    /**
     * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional
     * @type {boolean}
     * @memberof V1PodSecurityContext
     */
    runAsNonRoot?: boolean;
    /**
     * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. +optional
     * @type {number}
     * @memberof V1PodSecurityContext
     */
    runAsUser?: number;
    /**
     * 
     * @type {V1SELinuxOptions}
     * @memberof V1PodSecurityContext
     */
    seLinuxOptions?: V1SELinuxOptions;
    /**
     * 
     * @type {V1SeccompProfile}
     * @memberof V1PodSecurityContext
     */
    seccompProfile?: V1SeccompProfile;
    /**
     * A list of groups applied to the first process run in each container, in addition to the container\'s primary GID.  If unspecified, no groups will be added to any container. +optional
     * @type {Array<number>}
     * @memberof V1PodSecurityContext
     */
    supplementalGroups?: Array<number>;
    /**
     * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. +optional
     * @type {Array<V1Sysctl>}
     * @memberof V1PodSecurityContext
     */
    sysctls?: Array<V1Sysctl>;
    /**
     * 
     * @type {V1WindowsSecurityContextOptions}
     * @memberof V1PodSecurityContext
     */
    windowsOptions?: V1WindowsSecurityContextOptions;
}


