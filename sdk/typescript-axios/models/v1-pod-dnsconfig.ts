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


import { V1PodDNSConfigOption } from './v1-pod-dnsconfig-option';

/**
 * 
 * @export
 * @interface V1PodDNSConfig
 */
export interface V1PodDNSConfig {
    /**
     * A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed. +optional
     * @type {Array<string>}
     * @memberof V1PodDNSConfig
     */
    nameservers?: Array<string>;
    /**
     * A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy. +optional
     * @type {Array<V1PodDNSConfigOption>}
     * @memberof V1PodDNSConfig
     */
    options?: Array<V1PodDNSConfigOption>;
    /**
     * A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed. +optional
     * @type {Array<string>}
     * @memberof V1PodDNSConfig
     */
    searches?: Array<string>;
}


