/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $chart_Metadata = {
    properties: {
        annotations: {
            type: 'dictionary',
            contains: {
                type: 'string',
            },
        },
        apiVersion: {
            type: 'string',
        },
        appVersion: {
            type: 'string',
        },
        condition: {
            type: 'string',
        },
        dependencies: {
            type: 'array',
            contains: {
                type: 'chart_Dependency',
            },
        },
        deprecated: {
            type: 'boolean',
        },
        description: {
            type: 'string',
        },
        home: {
            type: 'string',
        },
        icon: {
            type: 'string',
        },
        keywords: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        kubeVersion: {
            type: 'string',
        },
        maintainers: {
            type: 'array',
            contains: {
                type: 'chart_Maintainer',
            },
        },
        name: {
            type: 'string',
        },
        sources: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        tags: {
            type: 'string',
        },
        type: {
            type: 'string',
        },
        version: {
            type: 'string',
        },
    },
};