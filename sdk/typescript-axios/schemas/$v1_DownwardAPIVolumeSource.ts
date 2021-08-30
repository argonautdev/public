/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_DownwardAPIVolumeSource = {
    properties: {
        defaultMode: {
            type: 'number',
        },
        items: {
            type: 'array',
            contains: {
                type: 'v1_DownwardAPIVolumeFile',
            },
        },
    },
};