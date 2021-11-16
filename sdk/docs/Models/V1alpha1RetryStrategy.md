# V1alpha1RetryStrategy
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affinity** | [**v1alpha1.RetryAffinity**](v1alpha1.RetryAffinity.md) |  | [optional] [default to null]
**backoff** | [**v1alpha1.Backoff**](v1alpha1.Backoff.md) |  | [optional] [default to null]
**expression** | [**String**](string.md) | Expression is a condition expression for when a node will be retried. If it evaluates to false, the node will not be retried and the retry strategy will be ignored/ | [optional] [default to null]
**limit** | [**intstr.IntOrString**](intstr.IntOrString.md) |  | [optional] [default to null]
**retryPolicy** | [**String**](string.md) | RetryPolicy is a policy of NodePhase statuses that will be retried | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

