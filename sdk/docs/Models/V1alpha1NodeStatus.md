# V1alpha1NodeStatus
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boundaryID** | [**String**](string.md) | BoundaryID indicates the node ID of the associated template root node in which this node belongs to | [optional] [default to null]
**children** | [**List**](string.md) | Children is a list of child node IDs | [optional] [default to null]
**daemoned** | [**Boolean**](boolean.md) | Daemoned tracks whether or not this node was daemoned and need to be terminated | [optional] [default to null]
**displayName** | [**String**](string.md) | DisplayName is a human readable representation of the node. Unique within a template boundary | [optional] [default to null]
**estimatedDuration** | [**Integer**](integer.md) | EstimatedDuration in seconds. | [optional] [default to null]
**finishedAt** | [**String**](string.md) | Time at which this node completed | [optional] [default to null]
**hostNodeName** | [**String**](string.md) | HostNodeName name of the Kubernetes node on which the Pod is running, if applicable | [optional] [default to null]
**id** | [**String**](string.md) | ID is a unique identifier of a node within the worklow It is implemented as a hash of the node name, which makes the ID deterministic | [optional] [default to null]
**inputs** | [**v1alpha1.Inputs**](v1alpha1.Inputs.md) |  | [optional] [default to null]
**memoizationStatus** | [**v1alpha1.MemoizationStatus**](v1alpha1.MemoizationStatus.md) |  | [optional] [default to null]
**message** | [**String**](string.md) | A human readable message indicating details about why the node is in this condition. | [optional] [default to null]
**name** | [**String**](string.md) | Name is unique name in the node tree used to generate the node ID | [optional] [default to null]
**outboundNodes** | [**List**](string.md) | OutboundNodes tracks the node IDs which are considered \&quot;outbound\&quot; nodes to a template invocation. For every invocation of a template, there are nodes which we considered as \&quot;outbound\&quot;. Essentially, these are last nodes in the execution sequence to run, before the template is considered completed. These nodes are then connected as parents to a following step.  In the case of single pod steps (i.e. container, script, resource templates), this list will be nil since the pod itself is already considered the \&quot;outbound\&quot; node. In the case of DAGs, outbound nodes are the \&quot;target\&quot; tasks (tasks with no children). In the case of steps, outbound nodes are all the containers involved in the last step group. NOTE: since templates are composable, the list of outbound nodes are carried upwards when a DAG/steps template invokes another DAG/steps template. In other words, the outbound nodes of a template, will be a superset of the outbound nodes of its last children. | [optional] [default to null]
**outputs** | [**v1alpha1.Outputs**](v1alpha1.Outputs.md) |  | [optional] [default to null]
**phase** | [**String**](string.md) | Phase a simple, high-level summary of where the node is in its lifecycle. Can be used as a state machine. | [optional] [default to null]
**podIP** | [**String**](string.md) | PodIP captures the IP of the pod for daemoned steps | [optional] [default to null]
**progress** | [**String**](string.md) | Progress to completion | [optional] [default to null]
**resourcesDuration** | [**Map**](integer.md) |  | [optional] [default to null]
**startedAt** | [**String**](string.md) | Time at which this node started | [optional] [default to null]
**synchronizationStatus** | [**v1alpha1.NodeSynchronizationStatus**](v1alpha1.NodeSynchronizationStatus.md) |  | [optional] [default to null]
**templateName** | [**String**](string.md) | TemplateName is the template name which this node corresponds to. Not applicable to virtual nodes (e.g. Retry, StepGroup) | [optional] [default to null]
**templateRef** | [**v1alpha1.TemplateRef**](v1alpha1.TemplateRef.md) |  | [optional] [default to null]
**templateScope** | [**String**](string.md) | TemplateScope is the template scope in which the template of this node was retrieved. | [optional] [default to null]
**type** | [**String**](string.md) | Type indicates type of node | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

