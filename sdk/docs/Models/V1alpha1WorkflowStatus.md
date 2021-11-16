# V1alpha1WorkflowStatus
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifactRepositoryRef** | [**v1alpha1.ArtifactRepositoryRefStatus**](v1alpha1.ArtifactRepositoryRefStatus.md) |  | [optional] [default to null]
**compressedNodes** | [**String**](string.md) | Compressed and base64 decoded Nodes map | [optional] [default to null]
**conditions** | [**List**](v1alpha1.Condition.md) | Conditions is a list of conditions the Workflow may have | [optional] [default to null]
**estimatedDuration** | [**Integer**](integer.md) | EstimatedDuration in seconds. | [optional] [default to null]
**finishedAt** | [**String**](string.md) | Time at which this workflow completed | [optional] [default to null]
**message** | [**String**](string.md) | A human readable message indicating details about why the workflow is in this condition. | [optional] [default to null]
**nodes** | [**Map**](v1alpha1.NodeStatus.md) |  | [optional] [default to null]
**offloadNodeStatusVersion** | [**String**](string.md) | Whether on not node status has been offloaded to a database. If exists, then Nodes and CompressedNodes will be empty. This will actually be populated with a hash of the offloaded data. | [optional] [default to null]
**outputs** | [**v1alpha1.Outputs**](v1alpha1.Outputs.md) |  | [optional] [default to null]
**persistentVolumeClaims** | [**List**](v1.Volume.md) | PersistentVolumeClaims tracks all PVCs that were created as part of the workflow. The contents of this list are drained at the end of the workflow. | [optional] [default to null]
**phase** | [**String**](string.md) | Phase a simple, high-level summary of where the workflow is in its lifecycle. | [optional] [default to null]
**progress** | [**String**](string.md) | Progress to completion | [optional] [default to null]
**resourcesDuration** | [**Map**](integer.md) |  | [optional] [default to null]
**startedAt** | [**String**](string.md) | Time at which this workflow started | [optional] [default to null]
**storedTemplates** | [**Map**](v1alpha1.Template.md) | StoredTemplates is a mapping between a template ref and the node&#39;s status. | [optional] [default to null]
**storedWorkflowTemplateSpec** | [**v1alpha1.WorkflowSpec**](v1alpha1.WorkflowSpec.md) |  | [optional] [default to null]
**synchronization** | [**v1alpha1.SynchronizationStatus**](v1alpha1.SynchronizationStatus.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

