/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_ResourceTemplate = {
    properties: {
        action: {
            type: 'string',
        },
        failureCondition: {
            type: 'string',
        },
        flags: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        manifest: {
            type: 'string',
        },
        mergeStrategy: {
            type: 'string',
        },
        setOwnerReference: {
            type: 'boolean',
        },
        successCondition: {
            type: 'string',
        },
    },
};