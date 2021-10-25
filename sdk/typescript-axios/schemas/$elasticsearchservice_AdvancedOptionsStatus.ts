/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $elasticsearchservice_AdvancedOptionsStatus = {
    properties: {
        Options: {
            type: 'dictionary',
            contains: {
                type: 'string',
            },
        },
        Status: {
            type: 'elasticsearchservice_OptionStatus',
        },
    },
};