/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $eks_Issue = {
    properties: {
        Code: {
            type: 'string',
        },
        Message: {
            type: 'string',
        },
        ResourceIds: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};