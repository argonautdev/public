# V1alpha1MutexStatus
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**holding** | [**List**](v1alpha1.MutexHolding.md) | Holding is a list of mutexes and their respective objects that are held by mutex lock for this workflow. +listType&#x3D;atomic | [optional] [default to null]
**waiting** | [**List**](v1alpha1.MutexHolding.md) | Waiting is a list of mutexes and their respective objects this workflow is waiting for. +listType&#x3D;atomic | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

