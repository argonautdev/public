/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_PodAffinity = {
    properties: {
        preferredDuringSchedulingIgnoredDuringExecution: {
            type: 'array',
            contains: {
                type: 'v1_WeightedPodAffinityTerm',
            },
        },
        requiredDuringSchedulingIgnoredDuringExecution: {
            type: 'array',
            contains: {
                type: 'v1_PodAffinityTerm',
            },
        },
    },
};