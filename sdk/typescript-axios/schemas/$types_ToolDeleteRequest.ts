/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $types_ToolDeleteRequest = {
    properties: {
        kind: {
            type: 'string',
        },
        spec: {
            type: 'array',
            contains: {
                type: 'types_AppDeleteRequest',
            },
        },
        version: {
            type: 'string',
        },
    },
};