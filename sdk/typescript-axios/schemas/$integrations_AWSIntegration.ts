/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $integrations_AWSIntegration = {
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
        aws_access_key_id: {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        aws_account_id: {
            type: 'string',
        },
        aws_arn: {
            type: 'string',
        },
        aws_cluster_id: {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        aws_region: {
            type: 'string',
        },
        aws_secret_access_key: {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        aws_session_token: {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        organization_id: {
            type: 'number',
        },
        user_id: {
            type: 'number',
        },
    },
};