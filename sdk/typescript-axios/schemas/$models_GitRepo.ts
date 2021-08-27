/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $models_GitRepo = {
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
        OAuthIntegrationID: {
            type: 'number',
        },
        UpdatedAt: {
            type: 'string',
        },
        organization: {
            type: 'models_Organization',
        },
        organization_id: {
            type: 'number',
        },
        repo_entity: {
            type: 'string',
        },
    },
};