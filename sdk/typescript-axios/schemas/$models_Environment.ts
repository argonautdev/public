/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $models_Environment = {
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
        isSetup: {
            type: 'boolean',
        },
        name: {
            type: 'string',
        },
        organization: {
            type: 'models_Organization',
        },
        organization_id: {
            type: 'number',
        },
        region: {
            type: 'string',
        },
        status: {
            type: 'string',
        },
        tf_configs: {
            type: 'string',
        },
        uid: {
            type: 'string',
        },
        vpc: {
            type: 'string',
        },
    },
};