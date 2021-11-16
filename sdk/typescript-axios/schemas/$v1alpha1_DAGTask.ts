/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_DAGTask = {
    properties: {
        arguments: {
            type: 'v1alpha1_Arguments',
        },
        continueOn: {
            type: 'v1alpha1_ContinueOn',
        },
        dependencies: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        depends: {
            type: 'string',
        },
        hooks: {
            type: 'v1alpha1_LifecycleHooks',
        },
        inline: {
            type: 'v1alpha1_Template',
        },
        name: {
            type: 'string',
        },
        onExit: {
            type: 'string',
        },
        template: {
            type: 'string',
        },
        templateRef: {
            type: 'v1alpha1_TemplateRef',
        },
        when: {
            type: 'string',
        },
        withItems: {
            type: 'array',
            contains: {
                type: 'v1alpha1_Item',
            },
        },
        withParam: {
            type: 'string',
        },
        withSequence: {
            type: 'v1alpha1_Sequence',
        },
    },
};