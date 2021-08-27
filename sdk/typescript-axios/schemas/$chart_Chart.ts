/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $chart_Chart = {
    properties: {
        files: {
            type: 'array',
            contains: {
                type: 'chart_File',
            },
        },
        lock: {
            type: 'chart_Lock',
        },
        metadata: {
            type: 'chart_Metadata',
        },
        schema: {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        templates: {
            type: 'array',
            contains: {
                type: 'chart_File',
            },
        },
        values: {
            properties: {
            },
        },
    },
};