/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $release_Hook = {
    properties: {
        delete_policies: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        events: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        kind: {
            type: 'string',
        },
        last_run: {
            type: 'release_HookExecution',
        },
        manifest: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        path: {
            type: 'string',
        },
        weight: {
            type: 'number',
        },
    },
};