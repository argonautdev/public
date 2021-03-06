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


import { ChartDependency } from './chart-dependency';
import { ChartMaintainer } from './chart-maintainer';

/**
 * 
 * @export
 * @interface ChartMetadata
 */
export interface ChartMetadata {
    /**
     * Annotations are additional mappings uninterpreted by Helm, made available for inspection by other applications.
     * @type {{ [key: string]: string; }}
     * @memberof ChartMetadata
     */
    annotations?: { [key: string]: string; };
    /**
     * The API Version of this chart. Required.
     * @type {string}
     * @memberof ChartMetadata
     */
    apiVersion?: string;
    /**
     * The version of the application enclosed inside of this chart.
     * @type {string}
     * @memberof ChartMetadata
     */
    appVersion?: string;
    /**
     * The condition to check to enable chart
     * @type {string}
     * @memberof ChartMetadata
     */
    condition?: string;
    /**
     * Dependencies are a list of dependencies for a chart.
     * @type {Array<ChartDependency>}
     * @memberof ChartMetadata
     */
    dependencies?: Array<ChartDependency>;
    /**
     * Whether or not this chart is deprecated
     * @type {boolean}
     * @memberof ChartMetadata
     */
    deprecated?: boolean;
    /**
     * A one-sentence description of the chart
     * @type {string}
     * @memberof ChartMetadata
     */
    description?: string;
    /**
     * The URL to a relevant project page, git repo, or contact person
     * @type {string}
     * @memberof ChartMetadata
     */
    home?: string;
    /**
     * The URL to an icon file.
     * @type {string}
     * @memberof ChartMetadata
     */
    icon?: string;
    /**
     * A list of string keywords
     * @type {Array<string>}
     * @memberof ChartMetadata
     */
    keywords?: Array<string>;
    /**
     * KubeVersion is a SemVer constraint specifying the version of Kubernetes required.
     * @type {string}
     * @memberof ChartMetadata
     */
    kubeVersion?: string;
    /**
     * A list of name and URL/email address combinations for the maintainer(s)
     * @type {Array<ChartMaintainer>}
     * @memberof ChartMetadata
     */
    maintainers?: Array<ChartMaintainer>;
    /**
     * The name of the chart. Required.
     * @type {string}
     * @memberof ChartMetadata
     */
    name?: string;
    /**
     * Source is the URL to the source code of this chart
     * @type {Array<string>}
     * @memberof ChartMetadata
     */
    sources?: Array<string>;
    /**
     * The tags to check to enable chart
     * @type {string}
     * @memberof ChartMetadata
     */
    tags?: string;
    /**
     * Specifies the chart type: application or library
     * @type {string}
     * @memberof ChartMetadata
     */
    type?: string;
    /**
     * A SemVer 2 conformant version string of the chart. Required.
     * @type {string}
     * @memberof ChartMetadata
     */
    version?: string;
}


