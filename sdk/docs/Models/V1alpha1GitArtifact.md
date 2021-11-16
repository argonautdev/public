# V1alpha1GitArtifact
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | [**Integer**](integer.md) | Depth specifies clones/fetches should be shallow and include the given number of commits from the branch tip | [optional] [default to null]
**disableSubmodules** | [**Boolean**](boolean.md) | DisableSubmodules disables submodules during git clone | [optional] [default to null]
**fetch** | [**List**](string.md) | Fetch specifies a number of refs that should be fetched before checkout | [optional] [default to null]
**insecureIgnoreHostKey** | [**Boolean**](boolean.md) | InsecureIgnoreHostKey disables SSH strict host key checking during git clone | [optional] [default to null]
**passwordSecret** | [**v1.SecretKeySelector**](v1.SecretKeySelector.md) |  | [optional] [default to null]
**repo** | [**String**](string.md) | Repo is the git repository | [optional] [default to null]
**revision** | [**String**](string.md) | Revision is the git commit, tag, branch to checkout | [optional] [default to null]
**sshPrivateKeySecret** | [**v1.SecretKeySelector**](v1.SecretKeySelector.md) |  | [optional] [default to null]
**usernameSecret** | [**v1.SecretKeySelector**](v1.SecretKeySelector.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

