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


import { ChartChart } from './chart-chart';
import { ReleaseHook } from './release-hook';
import { ReleaseInfo } from './release-info';

/**
 * 
 * @export
 * @interface ReleaseRelease
 */
export interface ReleaseRelease {
    /**
     * 
     * @type {ChartChart}
     * @memberof ReleaseRelease
     */
    chart?: ChartChart;
    /**
     * Config is the set of extra Values added to the chart. These values override the default values inside of the chart.
     * @type {object}
     * @memberof ReleaseRelease
     */
    config?: object;
    /**
     * Hooks are all of the hooks declared for this release.
     * @type {Array<ReleaseHook>}
     * @memberof ReleaseRelease
     */
    hooks?: Array<ReleaseHook>;
    /**
     * 
     * @type {ReleaseInfo}
     * @memberof ReleaseRelease
     */
    info?: ReleaseInfo;
    /**
     * Manifest is the string representation of the rendered template.
     * @type {string}
     * @memberof ReleaseRelease
     */
    manifest?: string;
    /**
     * Name is the name of the release
     * @type {string}
     * @memberof ReleaseRelease
     */
    name?: string;
    /**
     * Namespace is the kubernetes namespace of the release.
     * @type {string}
     * @memberof ReleaseRelease
     */
    namespace?: string;
    /**
     * Version is an int which represents the revision of the release.
     * @type {number}
     * @memberof ReleaseRelease
     */
    version?: number;
}


