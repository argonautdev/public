/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_LabelSelectorRequirement = {
    properties: {
        key: {
            type: 'string',
        },
        operator: {
            type: 'string',
        },
        values: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};