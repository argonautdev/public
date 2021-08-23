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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * V1MediaApi - axios parameter creator
 * @export
 */
export const V1MediaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Download media file at the given path
         * @param {string} path Path of the file to download in the media/ folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaDownload: async (path: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'path' is not null or undefined
            assertParamExists('mediaDownload', 'path', path)
            const localVarPath = `/media/download/{path}`
                .replace(`{${"path"}}`, encodeURIComponent(String(path)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWTKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * V1MediaApi - functional programming interface
 * @export
 */
export const V1MediaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = V1MediaApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Download media file at the given path
         * @param {string} path Path of the file to download in the media/ folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mediaDownload(path: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mediaDownload(path, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * V1MediaApi - factory interface
 * @export
 */
export const V1MediaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = V1MediaApiFp(configuration)
    return {
        /**
         * 
         * @summary Download media file at the given path
         * @param {string} path Path of the file to download in the media/ folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaDownload(path: string, options?: any): AxiosPromise<string> {
            return localVarFp.mediaDownload(path, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for mediaDownload operation in V1MediaApi.
 * @export
 * @interface V1MediaApiMediaDownloadRequest
 */
export interface V1MediaApiMediaDownloadRequest {
    /**
     * Path of the file to download in the media/ folder
     * @type {string}
     * @memberof V1MediaApiMediaDownload
     */
    readonly path: string
}

/**
 * V1MediaApi - object-oriented interface
 * @export
 * @class V1MediaApi
 * @extends {BaseAPI}
 */
export class V1MediaApi extends BaseAPI {
    /**
     * 
     * @summary Download media file at the given path
     * @param {V1MediaApiMediaDownloadRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1MediaApi
     */
    public mediaDownload(requestParameters: V1MediaApiMediaDownloadRequest, options?: any) {
        return V1MediaApiFp(this.configuration).mediaDownload(requestParameters.path, options).then((request) => request(this.axios, this.basePath));
    }
}
