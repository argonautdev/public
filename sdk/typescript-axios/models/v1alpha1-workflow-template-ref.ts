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
 * @interface V1alpha1WorkflowTemplateRef
 */
export interface V1alpha1WorkflowTemplateRef {
    /**
     * ClusterScope indicates the referred template is cluster scoped (i.e. a ClusterWorkflowTemplate).
     * @type {boolean}
     * @memberof V1alpha1WorkflowTemplateRef
     */
    clusterScope?: boolean;
    /**
     * Name is the resource name of the workflow template.
     * @type {string}
     * @memberof V1alpha1WorkflowTemplateRef
     */
    name?: string;
}


