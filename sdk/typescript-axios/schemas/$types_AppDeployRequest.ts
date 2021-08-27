/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $types_AppDeployRequest = {
    properties: {
        dry_run: {
            type: 'boolean',
        },
        setOptions: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        values: {
            type: 'string',
            format: 'base64',
        },
    },
};