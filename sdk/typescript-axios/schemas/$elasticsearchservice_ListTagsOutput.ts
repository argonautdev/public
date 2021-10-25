/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $elasticsearchservice_ListTagsOutput = {
    properties: {
        TagList: {
            type: 'array',
            contains: {
                type: 'elasticsearchservice_Tag',
            },
        },
    },
};