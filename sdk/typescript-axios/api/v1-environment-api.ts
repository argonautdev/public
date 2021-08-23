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
// @ts-ignore
import { InlineResponseDefault } from '../models';
// @ts-ignore
import { IntegrationsAWSIntegration } from '../models';
// @ts-ignore
import { V1TerragruntParserRequestConfig } from '../models';
// @ts-ignore
import { V1TerragruntParserResponse } from '../models';
/**
 * V1EnvironmentApi - axios parameter creator
 * @export
 */
export const V1EnvironmentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets the last applied spec for the environment if it exists
         * @param {string} environmentName Environment Name
         * @param {string} environmentRegion Environment Region
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentEnvironmentSpec: async (environmentName: string, environmentRegion: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'environmentName' is not null or undefined
            assertParamExists('getCurrentEnvironmentSpec', 'environmentName', environmentName)
            // verify required parameter 'environmentRegion' is not null or undefined
            assertParamExists('getCurrentEnvironmentSpec', 'environmentRegion', environmentRegion)
            const localVarPath = `/environment/spec/{environment_name}/{environment_region}`
                .replace(`{${"environment_name"}}`, encodeURIComponent(String(environmentName)))
                .replace(`{${"environment_region"}}`, encodeURIComponent(String(environmentRegion)));
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
        /**
         * 
         * @summary List all the resources in an environment
         * @param {string} environmentName Environment name
         * @param {boolean} [rds] includes rds in response body if true
         * @param {boolean} [eks] includes eks in response body if true
         * @param {boolean} [s3Bucket] includes s3 buckets in response body if true
         * @param {boolean} [elasticache] includes elasticache in response body if true
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listResourcesInEnvironment: async (environmentName: string, rds?: boolean, eks?: boolean, s3Bucket?: boolean, elasticache?: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'environmentName' is not null or undefined
            assertParamExists('listResourcesInEnvironment', 'environmentName', environmentName)
            const localVarPath = `/environment/list-resources/{environment_name}`
                .replace(`{${"environment_name"}}`, encodeURIComponent(String(environmentName)));
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

            if (rds !== undefined) {
                localVarQueryParameter['rds'] = rds;
            }

            if (eks !== undefined) {
                localVarQueryParameter['eks'] = eks;
            }

            if (s3Bucket !== undefined) {
                localVarQueryParameter['s3Bucket'] = s3Bucket;
            }

            if (elasticache !== undefined) {
                localVarQueryParameter['elasticache'] = elasticache;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes the resource folder from the github repo used to manage the hcl configs. This will trigger a workflow (which will fail since the required params won\'t be found in the commit message). NOTE: **This must be called after successful destruction of the resource, as resource existance is not checked here**
         * @summary Removes the resource folder from argonaut_terraform_configs
         * @param {string} environmentName Environment Name
         * @param {string} environmentRegion Environment Region
         * @param {string} resource Resource - the subfolder in environment/region
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeResourceInEnvironment: async (environmentName: string, environmentRegion: string, resource: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'environmentName' is not null or undefined
            assertParamExists('removeResourceInEnvironment', 'environmentName', environmentName)
            // verify required parameter 'environmentRegion' is not null or undefined
            assertParamExists('removeResourceInEnvironment', 'environmentRegion', environmentRegion)
            // verify required parameter 'resource' is not null or undefined
            assertParamExists('removeResourceInEnvironment', 'resource', resource)
            const localVarPath = `/environment/github/delete/{environment_name}/{environment_region}/{resource}`
                .replace(`{${"environment_name"}}`, encodeURIComponent(String(environmentName)))
                .replace(`{${"environment_region"}}`, encodeURIComponent(String(environmentRegion)))
                .replace(`{${"resource"}}`, encodeURIComponent(String(resource)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
        /**
         * Creates an environment and all the resources send in body only if the environment does not exist in the db. The (name, region) for the environment must be unique. All environments are limited to one vpc which is created even if no resources are present in the body
         * @summary Creates an environment and all the resources send in body
         * @param {V1TerragruntParserRequestConfig} body Terragrunt Parser input
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        terragruntParserCreate: async (body: V1TerragruntParserRequestConfig, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('terragruntParserCreate', 'body', body)
            const localVarPath = `/infra/terragrunt/create`;
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
        /**
         * Deletes all the resources if the environment exist in the db. If the environment doesn\'t exist in the db an error is sent. All the resources that exists within the environment will be deleted. After the successful deletion of resources the environment will be deleted from the db. This behaviour is necessary since if the deletion of resources fails we should be able to retrigger it.
         * @summary Deletes all the resources and the environment
         * @param {V1TerragruntParserRequestConfig} body Terragrunt Parser input
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        terragruntParserDelete: async (body: V1TerragruntParserRequestConfig, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('terragruntParserDelete', 'body', body)
            const localVarPath = `/infra/terragrunt/delete`;
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
        /**
         * Updates all the resources send in body only if the environment does exist in the db. If the environment doesn\'t exist in the db an error is sent. If resources are removed from the body, all the resources that are removed from body are removed and their files are deleted from github. This however does not delete the environment and vpc if you want to delete the vpc you would want to trigger the delete action
         * @summary Updates all the resources send in body for the existing environment
         * @param {V1TerragruntParserRequestConfig} body Terragrunt Parser input
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        terragruntParserUpdate: async (body: V1TerragruntParserRequestConfig, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('terragruntParserUpdate', 'body', body)
            const localVarPath = `/infra/terragrunt/update`;
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
 * V1EnvironmentApi - functional programming interface
 * @export
 */
export const V1EnvironmentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = V1EnvironmentApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets the last applied spec for the environment if it exists
         * @param {string} environmentName Environment Name
         * @param {string} environmentRegion Environment Region
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCurrentEnvironmentSpec(environmentName: string, environmentRegion: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1TerragruntParserRequestConfig>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCurrentEnvironmentSpec(environmentName, environmentRegion, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List all the resources in an environment
         * @param {string} environmentName Environment name
         * @param {boolean} [rds] includes rds in response body if true
         * @param {boolean} [eks] includes eks in response body if true
         * @param {boolean} [s3Bucket] includes s3 buckets in response body if true
         * @param {boolean} [elasticache] includes elasticache in response body if true
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listResourcesInEnvironment(environmentName: string, rds?: boolean, eks?: boolean, s3Bucket?: boolean, elasticache?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IntegrationsAWSIntegration>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listResourcesInEnvironment(environmentName, rds, eks, s3Bucket, elasticache, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Removes the resource folder from the github repo used to manage the hcl configs. This will trigger a workflow (which will fail since the required params won\'t be found in the commit message). NOTE: **This must be called after successful destruction of the resource, as resource existance is not checked here**
         * @summary Removes the resource folder from argonaut_terraform_configs
         * @param {string} environmentName Environment Name
         * @param {string} environmentRegion Environment Region
         * @param {string} resource Resource - the subfolder in environment/region
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeResourceInEnvironment(environmentName: string, environmentRegion: string, resource: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeResourceInEnvironment(environmentName, environmentRegion, resource, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates an environment and all the resources send in body only if the environment does not exist in the db. The (name, region) for the environment must be unique. All environments are limited to one vpc which is created even if no resources are present in the body
         * @summary Creates an environment and all the resources send in body
         * @param {V1TerragruntParserRequestConfig} body Terragrunt Parser input
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async terragruntParserCreate(body: V1TerragruntParserRequestConfig, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1TerragruntParserResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terragruntParserCreate(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes all the resources if the environment exist in the db. If the environment doesn\'t exist in the db an error is sent. All the resources that exists within the environment will be deleted. After the successful deletion of resources the environment will be deleted from the db. This behaviour is necessary since if the deletion of resources fails we should be able to retrigger it.
         * @summary Deletes all the resources and the environment
         * @param {V1TerragruntParserRequestConfig} body Terragrunt Parser input
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async terragruntParserDelete(body: V1TerragruntParserRequestConfig, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1TerragruntParserResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terragruntParserDelete(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates all the resources send in body only if the environment does exist in the db. If the environment doesn\'t exist in the db an error is sent. If resources are removed from the body, all the resources that are removed from body are removed and their files are deleted from github. This however does not delete the environment and vpc if you want to delete the vpc you would want to trigger the delete action
         * @summary Updates all the resources send in body for the existing environment
         * @param {V1TerragruntParserRequestConfig} body Terragrunt Parser input
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async terragruntParserUpdate(body: V1TerragruntParserRequestConfig, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1TerragruntParserResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terragruntParserUpdate(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * V1EnvironmentApi - factory interface
 * @export
 */
export const V1EnvironmentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = V1EnvironmentApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets the last applied spec for the environment if it exists
         * @param {string} environmentName Environment Name
         * @param {string} environmentRegion Environment Region
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentEnvironmentSpec(environmentName: string, environmentRegion: string, options?: any): AxiosPromise<V1TerragruntParserRequestConfig> {
            return localVarFp.getCurrentEnvironmentSpec(environmentName, environmentRegion, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List all the resources in an environment
         * @param {string} environmentName Environment name
         * @param {boolean} [rds] includes rds in response body if true
         * @param {boolean} [eks] includes eks in response body if true
         * @param {boolean} [s3Bucket] includes s3 buckets in response body if true
         * @param {boolean} [elasticache] includes elasticache in response body if true
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listResourcesInEnvironment(environmentName: string, rds?: boolean, eks?: boolean, s3Bucket?: boolean, elasticache?: boolean, options?: any): AxiosPromise<IntegrationsAWSIntegration> {
            return localVarFp.listResourcesInEnvironment(environmentName, rds, eks, s3Bucket, elasticache, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes the resource folder from the github repo used to manage the hcl configs. This will trigger a workflow (which will fail since the required params won\'t be found in the commit message). NOTE: **This must be called after successful destruction of the resource, as resource existance is not checked here**
         * @summary Removes the resource folder from argonaut_terraform_configs
         * @param {string} environmentName Environment Name
         * @param {string} environmentRegion Environment Region
         * @param {string} resource Resource - the subfolder in environment/region
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeResourceInEnvironment(environmentName: string, environmentRegion: string, resource: string, options?: any): AxiosPromise<object> {
            return localVarFp.removeResourceInEnvironment(environmentName, environmentRegion, resource, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates an environment and all the resources send in body only if the environment does not exist in the db. The (name, region) for the environment must be unique. All environments are limited to one vpc which is created even if no resources are present in the body
         * @summary Creates an environment and all the resources send in body
         * @param {V1TerragruntParserRequestConfig} body Terragrunt Parser input
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        terragruntParserCreate(body: V1TerragruntParserRequestConfig, options?: any): AxiosPromise<V1TerragruntParserResponse> {
            return localVarFp.terragruntParserCreate(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes all the resources if the environment exist in the db. If the environment doesn\'t exist in the db an error is sent. All the resources that exists within the environment will be deleted. After the successful deletion of resources the environment will be deleted from the db. This behaviour is necessary since if the deletion of resources fails we should be able to retrigger it.
         * @summary Deletes all the resources and the environment
         * @param {V1TerragruntParserRequestConfig} body Terragrunt Parser input
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        terragruntParserDelete(body: V1TerragruntParserRequestConfig, options?: any): AxiosPromise<V1TerragruntParserResponse> {
            return localVarFp.terragruntParserDelete(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates all the resources send in body only if the environment does exist in the db. If the environment doesn\'t exist in the db an error is sent. If resources are removed from the body, all the resources that are removed from body are removed and their files are deleted from github. This however does not delete the environment and vpc if you want to delete the vpc you would want to trigger the delete action
         * @summary Updates all the resources send in body for the existing environment
         * @param {V1TerragruntParserRequestConfig} body Terragrunt Parser input
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        terragruntParserUpdate(body: V1TerragruntParserRequestConfig, options?: any): AxiosPromise<V1TerragruntParserResponse> {
            return localVarFp.terragruntParserUpdate(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getCurrentEnvironmentSpec operation in V1EnvironmentApi.
 * @export
 * @interface V1EnvironmentApiGetCurrentEnvironmentSpecRequest
 */
export interface V1EnvironmentApiGetCurrentEnvironmentSpecRequest {
    /**
     * Environment Name
     * @type {string}
     * @memberof V1EnvironmentApiGetCurrentEnvironmentSpec
     */
    readonly environmentName: string

    /**
     * Environment Region
     * @type {string}
     * @memberof V1EnvironmentApiGetCurrentEnvironmentSpec
     */
    readonly environmentRegion: string
}

/**
 * Request parameters for listResourcesInEnvironment operation in V1EnvironmentApi.
 * @export
 * @interface V1EnvironmentApiListResourcesInEnvironmentRequest
 */
export interface V1EnvironmentApiListResourcesInEnvironmentRequest {
    /**
     * Environment name
     * @type {string}
     * @memberof V1EnvironmentApiListResourcesInEnvironment
     */
    readonly environmentName: string

    /**
     * includes rds in response body if true
     * @type {boolean}
     * @memberof V1EnvironmentApiListResourcesInEnvironment
     */
    readonly rds?: boolean

    /**
     * includes eks in response body if true
     * @type {boolean}
     * @memberof V1EnvironmentApiListResourcesInEnvironment
     */
    readonly eks?: boolean

    /**
     * includes s3 buckets in response body if true
     * @type {boolean}
     * @memberof V1EnvironmentApiListResourcesInEnvironment
     */
    readonly s3Bucket?: boolean

    /**
     * includes elasticache in response body if true
     * @type {boolean}
     * @memberof V1EnvironmentApiListResourcesInEnvironment
     */
    readonly elasticache?: boolean
}

/**
 * Request parameters for removeResourceInEnvironment operation in V1EnvironmentApi.
 * @export
 * @interface V1EnvironmentApiRemoveResourceInEnvironmentRequest
 */
export interface V1EnvironmentApiRemoveResourceInEnvironmentRequest {
    /**
     * Environment Name
     * @type {string}
     * @memberof V1EnvironmentApiRemoveResourceInEnvironment
     */
    readonly environmentName: string

    /**
     * Environment Region
     * @type {string}
     * @memberof V1EnvironmentApiRemoveResourceInEnvironment
     */
    readonly environmentRegion: string

    /**
     * Resource - the subfolder in environment/region
     * @type {string}
     * @memberof V1EnvironmentApiRemoveResourceInEnvironment
     */
    readonly resource: string
}

/**
 * Request parameters for terragruntParserCreate operation in V1EnvironmentApi.
 * @export
 * @interface V1EnvironmentApiTerragruntParserCreateRequest
 */
export interface V1EnvironmentApiTerragruntParserCreateRequest {
    /**
     * Terragrunt Parser input
     * @type {V1TerragruntParserRequestConfig}
     * @memberof V1EnvironmentApiTerragruntParserCreate
     */
    readonly body: V1TerragruntParserRequestConfig
}

/**
 * Request parameters for terragruntParserDelete operation in V1EnvironmentApi.
 * @export
 * @interface V1EnvironmentApiTerragruntParserDeleteRequest
 */
export interface V1EnvironmentApiTerragruntParserDeleteRequest {
    /**
     * Terragrunt Parser input
     * @type {V1TerragruntParserRequestConfig}
     * @memberof V1EnvironmentApiTerragruntParserDelete
     */
    readonly body: V1TerragruntParserRequestConfig
}

/**
 * Request parameters for terragruntParserUpdate operation in V1EnvironmentApi.
 * @export
 * @interface V1EnvironmentApiTerragruntParserUpdateRequest
 */
export interface V1EnvironmentApiTerragruntParserUpdateRequest {
    /**
     * Terragrunt Parser input
     * @type {V1TerragruntParserRequestConfig}
     * @memberof V1EnvironmentApiTerragruntParserUpdate
     */
    readonly body: V1TerragruntParserRequestConfig
}

/**
 * V1EnvironmentApi - object-oriented interface
 * @export
 * @class V1EnvironmentApi
 * @extends {BaseAPI}
 */
export class V1EnvironmentApi extends BaseAPI {
    /**
     * 
     * @summary Gets the last applied spec for the environment if it exists
     * @param {V1EnvironmentApiGetCurrentEnvironmentSpecRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1EnvironmentApi
     */
    public getCurrentEnvironmentSpec(requestParameters: V1EnvironmentApiGetCurrentEnvironmentSpecRequest, options?: any) {
        return V1EnvironmentApiFp(this.configuration).getCurrentEnvironmentSpec(requestParameters.environmentName, requestParameters.environmentRegion, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List all the resources in an environment
     * @param {V1EnvironmentApiListResourcesInEnvironmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1EnvironmentApi
     */
    public listResourcesInEnvironment(requestParameters: V1EnvironmentApiListResourcesInEnvironmentRequest, options?: any) {
        return V1EnvironmentApiFp(this.configuration).listResourcesInEnvironment(requestParameters.environmentName, requestParameters.rds, requestParameters.eks, requestParameters.s3Bucket, requestParameters.elasticache, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes the resource folder from the github repo used to manage the hcl configs. This will trigger a workflow (which will fail since the required params won\'t be found in the commit message). NOTE: **This must be called after successful destruction of the resource, as resource existance is not checked here**
     * @summary Removes the resource folder from argonaut_terraform_configs
     * @param {V1EnvironmentApiRemoveResourceInEnvironmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1EnvironmentApi
     */
    public removeResourceInEnvironment(requestParameters: V1EnvironmentApiRemoveResourceInEnvironmentRequest, options?: any) {
        return V1EnvironmentApiFp(this.configuration).removeResourceInEnvironment(requestParameters.environmentName, requestParameters.environmentRegion, requestParameters.resource, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates an environment and all the resources send in body only if the environment does not exist in the db. The (name, region) for the environment must be unique. All environments are limited to one vpc which is created even if no resources are present in the body
     * @summary Creates an environment and all the resources send in body
     * @param {V1EnvironmentApiTerragruntParserCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1EnvironmentApi
     */
    public terragruntParserCreate(requestParameters: V1EnvironmentApiTerragruntParserCreateRequest, options?: any) {
        return V1EnvironmentApiFp(this.configuration).terragruntParserCreate(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes all the resources if the environment exist in the db. If the environment doesn\'t exist in the db an error is sent. All the resources that exists within the environment will be deleted. After the successful deletion of resources the environment will be deleted from the db. This behaviour is necessary since if the deletion of resources fails we should be able to retrigger it.
     * @summary Deletes all the resources and the environment
     * @param {V1EnvironmentApiTerragruntParserDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1EnvironmentApi
     */
    public terragruntParserDelete(requestParameters: V1EnvironmentApiTerragruntParserDeleteRequest, options?: any) {
        return V1EnvironmentApiFp(this.configuration).terragruntParserDelete(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates all the resources send in body only if the environment does exist in the db. If the environment doesn\'t exist in the db an error is sent. If resources are removed from the body, all the resources that are removed from body are removed and their files are deleted from github. This however does not delete the environment and vpc if you want to delete the vpc you would want to trigger the delete action
     * @summary Updates all the resources send in body for the existing environment
     * @param {V1EnvironmentApiTerragruntParserUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1EnvironmentApi
     */
    public terragruntParserUpdate(requestParameters: V1EnvironmentApiTerragruntParserUpdateRequest, options?: any) {
        return V1EnvironmentApiFp(this.configuration).terragruntParserUpdate(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}
