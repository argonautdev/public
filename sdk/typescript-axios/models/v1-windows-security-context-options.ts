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



/**
 * 
 * @export
 * @interface V1WindowsSecurityContextOptions
 */
export interface V1WindowsSecurityContextOptions {
    /**
     * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. +optional
     * @type {string}
     * @memberof V1WindowsSecurityContextOptions
     */
    gmsaCredentialSpec?: string;
    /**
     * GMSACredentialSpecName is the name of the GMSA credential spec to use. +optional
     * @type {string}
     * @memberof V1WindowsSecurityContextOptions
     */
    gmsaCredentialSpecName?: string;
    /**
     * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional
     * @type {string}
     * @memberof V1WindowsSecurityContextOptions
     */
    runAsUserName?: string;
}


