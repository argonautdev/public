# V1alpha1ArtifactRepositoryRefStatus
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifactRepository** | [**v1alpha1.ArtifactRepository**](v1alpha1.ArtifactRepository.md) |  | [optional] [default to null]
**configMap** | [**String**](string.md) | The name of the config map. Defaults to \&quot;artifact-repositories\&quot;. | [optional] [default to null]
**default** | [**Boolean**](boolean.md) | If this ref represents the default artifact repository, rather than a config map. | [optional] [default to null]
**key** | [**String**](string.md) | The config map key. Defaults to the value of the \&quot;workflows.argoproj.io/default-artifact-repository\&quot; annotation. | [optional] [default to null]
**namespace** | [**String**](string.md) | The namespace of the config map. Defaults to the workflow&#39;s namespace, or the controller&#39;s namespace (if found). | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

