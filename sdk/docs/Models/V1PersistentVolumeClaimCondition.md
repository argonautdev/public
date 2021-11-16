# V1PersistentVolumeClaimCondition
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastProbeTime** | [**String**](string.md) | Last time we probed the condition. +optional | [optional] [default to null]
**lastTransitionTime** | [**String**](string.md) | Last time the condition transitioned from one status to another. +optional | [optional] [default to null]
**message** | [**String**](string.md) | Human-readable message indicating details about last transition. +optional | [optional] [default to null]
**reason** | [**String**](string.md) | Unique, this should be a short, machine understandable string that gives the reason for condition&#39;s last transition. If it reports \&quot;ResizeStarted\&quot; that means the underlying persistent volume is being resized. +optional | [optional] [default to null]
**status** | [**String**](string.md) |  | [optional] [default to null]
**type** | [**String**](string.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

