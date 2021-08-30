/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $eks_NodegroupHealth = {
    properties: {
        Issues: {
            type: 'array',
            contains: {
                type: 'eks_Issue',
            },
        },
    },
};