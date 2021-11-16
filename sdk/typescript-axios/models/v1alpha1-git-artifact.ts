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


import { V1SecretKeySelector } from './v1-secret-key-selector';

/**
 * 
 * @export
 * @interface V1alpha1GitArtifact
 */
export interface V1alpha1GitArtifact {
    /**
     * Depth specifies clones/fetches should be shallow and include the given number of commits from the branch tip
     * @type {number}
     * @memberof V1alpha1GitArtifact
     */
    depth?: number;
    /**
     * DisableSubmodules disables submodules during git clone
     * @type {boolean}
     * @memberof V1alpha1GitArtifact
     */
    disableSubmodules?: boolean;
    /**
     * Fetch specifies a number of refs that should be fetched before checkout
     * @type {Array<string>}
     * @memberof V1alpha1GitArtifact
     */
    fetch?: Array<string>;
    /**
     * InsecureIgnoreHostKey disables SSH strict host key checking during git clone
     * @type {boolean}
     * @memberof V1alpha1GitArtifact
     */
    insecureIgnoreHostKey?: boolean;
    /**
     * 
     * @type {V1SecretKeySelector}
     * @memberof V1alpha1GitArtifact
     */
    passwordSecret?: V1SecretKeySelector;
    /**
     * Repo is the git repository
     * @type {string}
     * @memberof V1alpha1GitArtifact
     */
    repo?: string;
    /**
     * Revision is the git commit, tag, branch to checkout
     * @type {string}
     * @memberof V1alpha1GitArtifact
     */
    revision?: string;
    /**
     * 
     * @type {V1SecretKeySelector}
     * @memberof V1alpha1GitArtifact
     */
    sshPrivateKeySecret?: V1SecretKeySelector;
    /**
     * 
     * @type {V1SecretKeySelector}
     * @memberof V1alpha1GitArtifact
     */
    usernameSecret?: V1SecretKeySelector;
}


