/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $integrations_GCPIntegration = {
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
        'gcp-user-email': {
            type: 'string',
        },
        gcp_key_data: {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        gcp_organization_id: {
            type: 'string',
        },
        gcp_region: {
            type: 'string',
        },
        organization_id: {
            type: 'number',
        },
        user_id: {
            type: 'number',
        },
    },
};