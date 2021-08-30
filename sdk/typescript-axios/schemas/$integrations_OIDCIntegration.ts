/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $integrations_OIDCIntegration = {
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
        client: {
            type: 'string',
        },
        'client-id': {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        'client-secret': {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        'id-token': {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        'idp-certificate-authority-data': {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        'idp-issuer-url': {
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