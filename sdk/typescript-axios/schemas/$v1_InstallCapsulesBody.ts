/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_InstallCapsulesBody = {
    properties: {
        capsules: {
            type: 'v1_CapsulesStruct',
        },
        clusterName: {
            type: 'string',
            isRequired: true,
        },
        environment: {
            type: 'string',
            isRequired: true,
        },
        region: {
            type: 'string',
            isRequired: true,
        },
        wait_for_completion: {
            type: 'boolean',
        },
    },
};