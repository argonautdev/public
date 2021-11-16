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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { V1ArgoWorkflowsDescriptions } from '../models';
/**
 * V1ArgoWorkflowApi - axios parameter creator
 * @export
 */
export const V1ArgoWorkflowApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Lists all the workflows allowed with description
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        argoWorkflowList: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/argo-workflows/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates an argo workflow in the argo workflow cluster, the inputs are passed in body as a key value pair The workflow defined in the path is invoked. Template is parsed in workflow itself and will fail if there are missing variables
         * @summary Triggers an argo workflow
         * @param {string} workflow The name of the workflow to be triggered
         * @param {object} body The config for popualting the workflow template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        argoWorkflowTrigger: async (workflow: string, body: object, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'workflow' is not null or undefined
            assertParamExists('argoWorkflowTrigger', 'workflow', workflow)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('argoWorkflowTrigger', 'body', body)
            const localVarPath = `/argo-workflows/trigger/{workflow}`
                .replace(`{${"workflow"}}`, encodeURIComponent(String(workflow)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWTKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * V1ArgoWorkflowApi - functional programming interface
 * @export
 */
export const V1ArgoWorkflowApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = V1ArgoWorkflowApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Lists all the workflows allowed with description
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async argoWorkflowList(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1ArgoWorkflowsDescriptions>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.argoWorkflowList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates an argo workflow in the argo workflow cluster, the inputs are passed in body as a key value pair The workflow defined in the path is invoked. Template is parsed in workflow itself and will fail if there are missing variables
         * @summary Triggers an argo workflow
         * @param {string} workflow The name of the workflow to be triggered
         * @param {object} body The config for popualting the workflow template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async argoWorkflowTrigger(workflow: string, body: object, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.argoWorkflowTrigger(workflow, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * V1ArgoWorkflowApi - factory interface
 * @export
 */
export const V1ArgoWorkflowApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = V1ArgoWorkflowApiFp(configuration)
    return {
        /**
         * 
         * @summary Lists all the workflows allowed with description
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        argoWorkflowList(options?: any): AxiosPromise<V1ArgoWorkflowsDescriptions> {
            return localVarFp.argoWorkflowList(options).then((request) => request(axios, basePath));
        },
        /**
         * Creates an argo workflow in the argo workflow cluster, the inputs are passed in body as a key value pair The workflow defined in the path is invoked. Template is parsed in workflow itself and will fail if there are missing variables
         * @summary Triggers an argo workflow
         * @param {string} workflow The name of the workflow to be triggered
         * @param {object} body The config for popualting the workflow template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        argoWorkflowTrigger(workflow: string, body: object, options?: any): AxiosPromise<string> {
            return localVarFp.argoWorkflowTrigger(workflow, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for argoWorkflowTrigger operation in V1ArgoWorkflowApi.
 * @export
 * @interface V1ArgoWorkflowApiArgoWorkflowTriggerRequest
 */
export interface V1ArgoWorkflowApiArgoWorkflowTriggerRequest {
    /**
     * The name of the workflow to be triggered
     * @type {string}
     * @memberof V1ArgoWorkflowApiArgoWorkflowTrigger
     */
    readonly workflow: string

    /**
     * The config for popualting the workflow template
     * @type {object}
     * @memberof V1ArgoWorkflowApiArgoWorkflowTrigger
     */
    readonly body: object
}

/**
 * V1ArgoWorkflowApi - object-oriented interface
 * @export
 * @class V1ArgoWorkflowApi
 * @extends {BaseAPI}
 */
export class V1ArgoWorkflowApi extends BaseAPI {
    /**
     * 
     * @summary Lists all the workflows allowed with description
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1ArgoWorkflowApi
     */
    public argoWorkflowList(options?: any) {
        return V1ArgoWorkflowApiFp(this.configuration).argoWorkflowList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates an argo workflow in the argo workflow cluster, the inputs are passed in body as a key value pair The workflow defined in the path is invoked. Template is parsed in workflow itself and will fail if there are missing variables
     * @summary Triggers an argo workflow
     * @param {V1ArgoWorkflowApiArgoWorkflowTriggerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1ArgoWorkflowApi
     */
    public argoWorkflowTrigger(requestParameters: V1ArgoWorkflowApiArgoWorkflowTriggerRequest, options?: any) {
        return V1ArgoWorkflowApiFp(this.configuration).argoWorkflowTrigger(requestParameters.workflow, requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}
