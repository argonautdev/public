/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $release_Release = {
    properties: {
        chart: {
            type: 'chart_Chart',
        },
        config: {
            properties: {
            },
        },
        hooks: {
            type: 'array',
            contains: {
                type: 'release_Hook',
            },
        },
        info: {
            type: 'release_Info',
        },
        manifest: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        namespace: {
            type: 'string',
        },
        version: {
            type: 'number',
        },
    },
};