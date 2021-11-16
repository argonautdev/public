# V1alpha1Artifact
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive** | [**v1alpha1.ArchiveStrategy**](v1alpha1.ArchiveStrategy.md) |  | [optional] [default to null]
**archiveLogs** | [**Boolean**](boolean.md) | ArchiveLogs indicates if the container logs should be archived | [optional] [default to null]
**artifactory** | [**v1alpha1.ArtifactoryArtifact**](v1alpha1.ArtifactoryArtifact.md) |  | [optional] [default to null]
**from** | [**String**](string.md) | From allows an artifact to reference an artifact from a previous step | [optional] [default to null]
**fromExpression** | [**String**](string.md) | FromExpression, if defined, is evaluated to specify the value for the artifact | [optional] [default to null]
**gcs** | [**v1alpha1.GCSArtifact**](v1alpha1.GCSArtifact.md) |  | [optional] [default to null]
**git** | [**v1alpha1.GitArtifact**](v1alpha1.GitArtifact.md) |  | [optional] [default to null]
**globalName** | [**String**](string.md) | GlobalName exports an output artifact to the global scope, making it available as &#39;{{workflow.outputs.artifacts.XXXX}} and in workflow.status.outputs.artifacts | [optional] [default to null]
**hdfs** | [**v1alpha1.HDFSArtifact**](v1alpha1.HDFSArtifact.md) |  | [optional] [default to null]
**http** | [**v1alpha1.HTTPArtifact**](v1alpha1.HTTPArtifact.md) |  | [optional] [default to null]
**mode** | [**Integer**](integer.md) | mode bits to use on this file, must be a value between 0 and 0777 set when loading input artifacts. | [optional] [default to null]
**name** | [**String**](string.md) | name of the artifact. must be unique within a template&#39;s inputs/outputs. | [optional] [default to null]
**optional** | [**Boolean**](boolean.md) | Make Artifacts optional, if Artifacts doesn&#39;t generate or exist | [optional] [default to null]
**oss** | [**v1alpha1.OSSArtifact**](v1alpha1.OSSArtifact.md) |  | [optional] [default to null]
**path** | [**String**](string.md) | Path is the container path to the artifact | [optional] [default to null]
**raw** | [**v1alpha1.RawArtifact**](v1alpha1.RawArtifact.md) |  | [optional] [default to null]
**recurseMode** | [**Boolean**](boolean.md) | If mode is set, apply the permission recursively into the artifact if it is a folder | [optional] [default to null]
**s3** | [**v1alpha1.S3Artifact**](v1alpha1.S3Artifact.md) |  | [optional] [default to null]
**subPath** | [**String**](string.md) | SubPath allows an artifact to be sourced from a subpath within the specified source | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

