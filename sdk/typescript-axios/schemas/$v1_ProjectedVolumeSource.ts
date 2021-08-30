/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_ProjectedVolumeSource = {
    properties: {
        defaultMode: {
            type: 'number',
        },
        sources: {
            type: 'array',
            contains: {
                type: 'v1_VolumeProjection',
            },
        },
    },
};