# V1GitRepoVolumeSource
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directory** | [**String**](string.md) | Target directory name. Must not contain or start with &#39;..&#39;.  If &#39;.&#39; is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. +optional | [optional] [default to null]
**repository** | [**String**](string.md) | Repository URL | [optional] [default to null]
**revision** | [**String**](string.md) | Commit hash for the specified revision. +optional | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

