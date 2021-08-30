/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $integrations_BasicIntegration = {
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
        organization_id: {
            type: 'number',
        },
        password: {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        user_id: {
            type: 'number',
        },
        username: {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
    },
};