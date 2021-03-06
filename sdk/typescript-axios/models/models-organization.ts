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


import { GormDeletedAt } from './gorm-deleted-at';
import { IntegrationsAWSIntegration } from './integrations-awsintegration';
import { IntegrationsBasicIntegration } from './integrations-basic-integration';
import { IntegrationsGCPIntegration } from './integrations-gcpintegration';
import { IntegrationsKubeIntegration } from './integrations-kube-integration';
import { IntegrationsOAuthIntegration } from './integrations-oauth-integration';
import { IntegrationsOIDCIntegration } from './integrations-oidcintegration';
import { ModelsCapsule } from './models-capsule';
import { ModelsEnvironment } from './models-environment';
import { ModelsGhInstallation } from './models-gh-installation';
import { ModelsGitRepo } from './models-git-repo';
import { ModelsHelmRepo } from './models-helm-repo';
import { ModelsRegistry } from './models-registry';

/**
 * 
 * @export
 * @interface ModelsOrganization
 */
export interface ModelsOrganization {
    /**
     * 
     * @type {string}
     * @memberof ModelsOrganization
     */
    CreatedAt?: string;
    /**
     * 
     * @type {GormDeletedAt}
     * @memberof ModelsOrganization
     */
    DeletedAt?: GormDeletedAt;
    /**
     * 
     * @type {string}
     * @memberof ModelsOrganization
     */
    UpdatedAt?: string;
    /**
     * 
     * @type {Array<IntegrationsAWSIntegration>}
     * @memberof ModelsOrganization
     */
    aws_integrations?: Array<IntegrationsAWSIntegration>;
    /**
     * 
     * @type {Array<IntegrationsBasicIntegration>}
     * @memberof ModelsOrganization
     */
    basic_integrations?: Array<IntegrationsBasicIntegration>;
    /**
     * provisioned aws module
     * @type {Array<ModelsCapsule>}
     * @memberof ModelsOrganization
     */
    capsule?: Array<ModelsCapsule>;
    /**
     * linked Environments
     * @type {Array<ModelsEnvironment>}
     * @memberof ModelsOrganization
     */
    environments?: Array<ModelsEnvironment>;
    /**
     * set to false after setting the org name
     * @type {boolean}
     * @memberof ModelsOrganization
     */
    first_run?: boolean;
    /**
     * 
     * @type {Array<IntegrationsGCPIntegration>}
     * @memberof ModelsOrganization
     */
    gcp_integrations?: Array<IntegrationsGCPIntegration>;
    /**
     * linked Github App installations
     * @type {Array<ModelsGhInstallation>}
     * @memberof ModelsOrganization
     */
    gh_installations?: Array<ModelsGhInstallation>;
    /**
     * linked repos
     * @type {Array<ModelsGitRepo>}
     * @memberof ModelsOrganization
     */
    git_repos?: Array<ModelsGitRepo>;
    /**
     * github integration fields are below
     * @type {number}
     * @memberof ModelsOrganization
     */
    github_installation_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsOrganization
     */
    github_repo_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsOrganization
     */
    github_repo_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsOrganization
     */
    github_repo_owner?: string;
    /**
     * linked helm repos
     * @type {Array<ModelsHelmRepo>}
     * @memberof ModelsOrganization
     */
    helm_repos?: Array<ModelsHelmRepo>;
    /**
     * auth mechanisms
     * @type {Array<IntegrationsKubeIntegration>}
     * @memberof ModelsOrganization
     */
    kube_integrations?: Array<IntegrationsKubeIntegration>;
    /**
     * 
     * @type {string}
     * @memberof ModelsOrganization
     */
    name?: string;
    /**
     * 
     * @type {Array<IntegrationsOAuthIntegration>}
     * @memberof ModelsOrganization
     */
    oauth_integrations?: Array<IntegrationsOAuthIntegration>;
    /**
     * 
     * @type {Array<IntegrationsOIDCIntegration>}
     * @memberof ModelsOrganization
     */
    oidc_integrations?: Array<IntegrationsOIDCIntegration>;
    /**
     * 
     * @type {number}
     * @memberof ModelsOrganization
     */
    organization_id?: number;
    /**
     * owner of the organization
     * @type {number}
     * @memberof ModelsOrganization
     */
    owner_id?: number;
    /**
     * linked registries
     * @type {Array<ModelsRegistry>}
     * @memberof ModelsOrganization
     */
    registries?: Array<ModelsRegistry>;
    /**
     * tenantID comes from frontegg, which corresponds to org
     * @type {string}
     * @memberof ModelsOrganization
     */
    tenant_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsOrganization
     */
    tf_password?: string;
}


