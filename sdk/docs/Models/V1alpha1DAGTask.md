# V1alpha1DAGTask
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | [**v1alpha1.Arguments**](v1alpha1.Arguments.md) |  | [optional] [default to null]
**continueOn** | [**v1alpha1.ContinueOn**](v1alpha1.ContinueOn.md) |  | [optional] [default to null]
**dependencies** | [**List**](string.md) | Dependencies are name of other targets which this depends on | [optional] [default to null]
**depends** | [**String**](string.md) | Depends are name of other targets which this depends on | [optional] [default to null]
**hooks** | [**Map**](v1alpha1.LifecycleHook.md) |  | [optional] [default to null]
**inline** | [**v1alpha1.Template**](v1alpha1.Template.md) |  | [optional] [default to null]
**name** | [**String**](string.md) | Name is the name of the target | [optional] [default to null]
**onExit** | [**String**](string.md) | OnExit is a template reference which is invoked at the end of the template, irrespective of the success, failure, or error of the primary template. DEPRECATED: Use Hooks[exit].Template instead. | [optional] [default to null]
**template** | [**String**](string.md) | Name of template to execute | [optional] [default to null]
**templateRef** | [**v1alpha1.TemplateRef**](v1alpha1.TemplateRef.md) |  | [optional] [default to null]
**when** | [**String**](string.md) | When is an expression in which the task should conditionally execute | [optional] [default to null]
**withItems** | [**List**](object.md) | WithItems expands a task into multiple parallel tasks from the items in the list | [optional] [default to null]
**withParam** | [**String**](string.md) | WithParam expands a task into multiple parallel tasks from the value in the parameter, which is expected to be a JSON list. | [optional] [default to null]
**withSequence** | [**v1alpha1.Sequence**](v1alpha1.Sequence.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

