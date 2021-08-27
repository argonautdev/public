/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $integrations_OAuthIntegration = {
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
        'access-token': {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        client: {
            type: 'string',
        },
        'client-id': {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        organization_id: {
            type: 'number',
        },
        'refresh-token': {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        user_id: {
            type: 'number',
        },
    },
};