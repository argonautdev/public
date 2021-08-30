/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $capsules_InputGrafana = {
    properties: {
        config: {
            type: 'capsules_ConfigGrafana',
            isRequired: true,
        },
        dependencies: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};