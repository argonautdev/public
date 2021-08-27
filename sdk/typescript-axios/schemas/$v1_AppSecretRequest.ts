/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_AppSecretRequest = {
    properties: {
        app_name: {
            type: 'string',
        },
        cluster_name: {
            type: 'string',
        },
        env_from_string: {
            type: 'dictionary',
            contains: {
                type: 'string',
            },
        },
        environment: {
            type: 'v1_EnvironmentRequest',
        },
    },
};