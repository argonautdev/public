# V1alpha1ResourceTemplate
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**String**](string.md) | Action is the action to perform to the resource. Must be one of: get, create, apply, delete, replace, patch | [optional] [default to null]
**failureCondition** | [**String**](string.md) | FailureCondition is a label selector expression which describes the conditions of the k8s resource in which the step was considered failed | [optional] [default to null]
**flags** | [**List**](string.md) | Flags is a set of additional options passed to kubectl before submitting a resource I.e. to disable resource validation: flags: [  \&quot;--validate&#x3D;false\&quot;  # disable resource validation ] | [optional] [default to null]
**manifest** | [**String**](string.md) | Manifest contains the kubernetes manifest | [optional] [default to null]
**mergeStrategy** | [**String**](string.md) | MergeStrategy is the strategy used to merge a patch. It defaults to \&quot;strategic\&quot; Must be one of: strategic, merge, json | [optional] [default to null]
**setOwnerReference** | [**Boolean**](boolean.md) | SetOwnerReference sets the reference to the workflow on the OwnerReference of generated resource. | [optional] [default to null]
**successCondition** | [**String**](string.md) | SuccessCondition is a label selector expression which describes the conditions of the k8s resource in which it is acceptable to proceed to the following step | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

