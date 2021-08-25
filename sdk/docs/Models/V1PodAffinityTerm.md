# V1PodAffinityTerm
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labelSelector** | [**v1.LabelSelector**](v1.LabelSelector.md) |  | [optional] [default to null]
**namespaceSelector** | [**v1.LabelSelector**](v1.LabelSelector.md) |  | [optional] [default to null]
**namespaces** | [**List**](string.md) | namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means \&quot;this pod&#39;s namespace\&quot; +optional | [optional] [default to null]
**topologyKey** | [**String**](string.md) | This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

