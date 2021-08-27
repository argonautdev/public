/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $integrations_KubeIntegration = {
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
        'client-certificate-data': {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        'client-key-data': {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        kubeconfig: {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        mechanism: {
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
        token: {
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