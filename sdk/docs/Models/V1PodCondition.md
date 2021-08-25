# V1PodCondition
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastProbeTime** | [**String**](string.md) | Last time we probed the condition. +optional | [optional] [default to null]
**lastTransitionTime** | [**String**](string.md) | Last time the condition transitioned from one status to another. +optional | [optional] [default to null]
**message** | [**String**](string.md) | Human-readable message indicating details about last transition. +optional | [optional] [default to null]
**reason** | [**String**](string.md) | Unique, one-word, CamelCase reason for the condition&#39;s last transition. +optional | [optional] [default to null]
**status** | [**String**](string.md) | Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions | [optional] [default to null]
**type** | [**String**](string.md) | Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

