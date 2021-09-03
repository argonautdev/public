/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $types_AppDeployRequest = {
    properties: {
        dry_run: {
            type: 'boolean',
            isRequired: true,
        },
        setOptions: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        values: {
            type: 'string',
            isRequired: true,
            format: 'base64',
        },
    },
};