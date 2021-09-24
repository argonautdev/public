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


import { V1ConfigMapStruct } from './v1-config-map-struct';
import { V1DaemonSetStruct } from './v1-daemon-set-struct';
import { V1DeploymentStruct } from './v1-deployment-struct';
import { V1IngressStruct } from './v1-ingress-struct';
import { V1PersistentVolumeStruct } from './v1-persistent-volume-struct';
import { V1PodStruct } from './v1-pod-struct';
import { V1SecretStruct } from './v1-secret-struct';
import { V1ServiceStruct } from './v1-service-struct';
import { V1StatefulSetStruct } from './v1-stateful-set-struct';

/**
 * 
 * @export
 * @interface V1GetApplicationDetailsResponse
 */
export interface V1GetApplicationDetailsResponse {
    /**
     * 
     * @type {Array<V1ConfigMapStruct>}
     * @memberof V1GetApplicationDetailsResponse
     */
    ConfigMaps?: Array<V1ConfigMapStruct>;
    /**
     * 
     * @type {Array<V1DaemonSetStruct>}
     * @memberof V1GetApplicationDetailsResponse
     */
    DaemonSet?: Array<V1DaemonSetStruct>;
    /**
     * 
     * @type {Array<V1DeploymentStruct>}
     * @memberof V1GetApplicationDetailsResponse
     */
    Deployment?: Array<V1DeploymentStruct>;
    /**
     * 
     * @type {Array<V1IngressStruct>}
     * @memberof V1GetApplicationDetailsResponse
     */
    Ingress?: Array<V1IngressStruct>;
    /**
     * 
     * @type {Array<V1PersistentVolumeStruct>}
     * @memberof V1GetApplicationDetailsResponse
     */
    PersistantVolumeClaims?: Array<V1PersistentVolumeStruct>;
    /**
     * 
     * @type {Array<V1PodStruct>}
     * @memberof V1GetApplicationDetailsResponse
     */
    Pods?: Array<V1PodStruct>;
    /**
     * 
     * @type {Array<V1SecretStruct>}
     * @memberof V1GetApplicationDetailsResponse
     */
    Secrets?: Array<V1SecretStruct>;
    /**
     * 
     * @type {Array<V1ServiceStruct>}
     * @memberof V1GetApplicationDetailsResponse
     */
    Services?: Array<V1ServiceStruct>;
    /**
     * 
     * @type {Array<V1StatefulSetStruct>}
     * @memberof V1GetApplicationDetailsResponse
     */
    StatefulSet?: Array<V1StatefulSetStruct>;
}


