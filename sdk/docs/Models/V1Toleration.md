# V1Toleration
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effect** | [**String**](string.md) | Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute. +optional | [optional] [default to null]
**key** | [**String**](string.md) | Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys. +optional | [optional] [default to null]
**operator** | [**String**](string.md) | Operator represents a key&#39;s relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category. +optional | [optional] [default to null]
**tolerationSeconds** | [**Integer**](integer.md) | TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system. +optional | [optional] [default to null]
**value** | [**String**](string.md) | Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string. +optional | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

