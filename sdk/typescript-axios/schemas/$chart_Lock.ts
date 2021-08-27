/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $chart_Lock = {
    properties: {
        dependencies: {
            type: 'array',
            contains: {
                type: 'chart_Dependency',
            },
        },
        digest: {
            type: 'string',
        },
        generated: {
            type: 'string',
        },
    },
};