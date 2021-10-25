/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $elasticsearchservice_LogPublishingOptionsStatus = {
    properties: {
        Options: {
            type: 'dictionary',
            contains: {
                type: 'elasticsearchservice_LogPublishingOption',
            },
        },
        Status: {
            type: 'elasticsearchservice_OptionStatus',
        },
    },
};