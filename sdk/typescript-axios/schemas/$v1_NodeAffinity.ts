/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_NodeAffinity = {
    properties: {
        preferredDuringSchedulingIgnoredDuringExecution: {
            type: 'array',
            contains: {
                type: 'v1_PreferredSchedulingTerm',
            },
        },
        requiredDuringSchedulingIgnoredDuringExecution: {
            type: 'v1_NodeSelector',
        },
    },
};