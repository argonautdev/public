/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $models_Organization = {
    properties: {
        CreatedAt: {
            type: 'string',
        },
        DeletedAt: {
            type: 'gorm_DeletedAt',
        },
        UpdatedAt: {
            type: 'string',
        },
        aws_integrations: {
            type: 'array',
            contains: {
                type: 'integrations_AWSIntegration',
            },
        },
        basic_integrations: {
            type: 'array',
            contains: {
                type: 'integrations_BasicIntegration',
            },
        },
        capsule: {
            type: 'array',
            contains: {
                type: 'models_Capsule',
            },
        },
        environments: {
            type: 'array',
            contains: {
                type: 'models_Environment',
            },
        },
        first_run: {
            type: 'boolean',
        },
        gcp_integrations: {
            type: 'array',
            contains: {
                type: 'integrations_GCPIntegration',
            },
        },
        gh_installations: {
            type: 'array',
            contains: {
                type: 'models_GhInstallation',
            },
        },
        git_repos: {
            type: 'array',
            contains: {
                type: 'models_GitRepo',
            },
        },
        github_installation_id: {
            type: 'number',
        },
        github_repo_id: {
            type: 'number',
        },
        github_repo_name: {
            type: 'string',
        },
        github_repo_owner: {
            type: 'string',
        },
        helm_repos: {
            type: 'array',
            contains: {
                type: 'models_HelmRepo',
            },
        },
        kube_integrations: {
            type: 'array',
            contains: {
                type: 'integrations_KubeIntegration',
            },
        },
        name: {
            type: 'string',
        },
        oauth_integrations: {
            type: 'array',
            contains: {
                type: 'integrations_OAuthIntegration',
            },
        },
        oidc_integrations: {
            type: 'array',
            contains: {
                type: 'integrations_OIDCIntegration',
            },
        },
        organization_id: {
            type: 'number',
        },
        owner_id: {
            type: 'number',
        },
        registries: {
            type: 'array',
            contains: {
                type: 'models_Registry',
            },
        },
        tenant_id: {
            type: 'string',
        },
        tf_password: {
            type: 'string',
        },
    },
};