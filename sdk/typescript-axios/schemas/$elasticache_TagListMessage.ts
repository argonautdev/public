/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $elasticache_TagListMessage = {
    properties: {
        TagList: {
            type: 'array',
            contains: {
                type: 'elasticache_Tag',
            },
        },
    },
};