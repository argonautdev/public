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


import { V1ConfigMapKeySelector } from './v1-config-map-key-selector';
import { V1SecretKeySelector } from './v1-secret-key-selector';

/**
 * 
 * @export
 * @interface V1alpha1HDFSArtifactRepository
 */
export interface V1alpha1HDFSArtifactRepository {
    /**
     * Addresses is accessible addresses of HDFS name nodes
     * @type {Array<string>}
     * @memberof V1alpha1HDFSArtifactRepository
     */
    addresses?: Array<string>;
    /**
     * Force copies a file forcibly even if it exists (default: false)
     * @type {boolean}
     * @memberof V1alpha1HDFSArtifactRepository
     */
    force?: boolean;
    /**
     * HDFSUser is the user to access HDFS file system. It is ignored if either ccache or keytab is used.
     * @type {string}
     * @memberof V1alpha1HDFSArtifactRepository
     */
    hdfsUser?: string;
    /**
     * 
     * @type {V1SecretKeySelector}
     * @memberof V1alpha1HDFSArtifactRepository
     */
    krbCCacheSecret?: V1SecretKeySelector;
    /**
     * 
     * @type {V1ConfigMapKeySelector}
     * @memberof V1alpha1HDFSArtifactRepository
     */
    krbConfigConfigMap?: V1ConfigMapKeySelector;
    /**
     * 
     * @type {V1SecretKeySelector}
     * @memberof V1alpha1HDFSArtifactRepository
     */
    krbKeytabSecret?: V1SecretKeySelector;
    /**
     * KrbRealm is the Kerberos realm used with Kerberos keytab It must be set if keytab is used.
     * @type {string}
     * @memberof V1alpha1HDFSArtifactRepository
     */
    krbRealm?: string;
    /**
     * KrbServicePrincipalName is the principal name of Kerberos service It must be set if either ccache or keytab is used.
     * @type {string}
     * @memberof V1alpha1HDFSArtifactRepository
     */
    krbServicePrincipalName?: string;
    /**
     * KrbUsername is the Kerberos username used with Kerberos keytab It must be set if keytab is used.
     * @type {string}
     * @memberof V1alpha1HDFSArtifactRepository
     */
    krbUsername?: string;
    /**
     * PathFormat is defines the format of path to store a file. Can reference workflow variables
     * @type {string}
     * @memberof V1alpha1HDFSArtifactRepository
     */
    pathFormat?: string;
}


