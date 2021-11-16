/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1beta1_PodDisruptionBudgetSpec = {
    properties: {
        maxUnavailable: {
            type: 'intstr_IntOrString',
        },
        minAvailable: {
            type: 'intstr_IntOrString',
        },
        selector: {
            type: 'v1_LabelSelector',
        },
    },
};