/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $integrations_HelmRepoTokenCache = {
    properties: {
        CreatedAt: {
            type: 'string',
        },
        DeletedAt: {
            type: 'gorm_DeletedAt',
        },
        ID: {
            type: 'number',
        },
        UpdatedAt: {
            type: 'string',
        },
        access_token: {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        expiry: {
            type: 'string',
        },
        helm_repo_id: {
            type: 'number',
        },
    },
};