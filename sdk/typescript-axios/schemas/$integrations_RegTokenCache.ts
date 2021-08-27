/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $integrations_RegTokenCache = {
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
        registry_id: {
            type: 'number',
        },
    },
};