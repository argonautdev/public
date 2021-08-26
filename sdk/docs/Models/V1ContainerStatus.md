# V1ContainerStatus
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerID** | [**String**](string.md) | Container&#39;s ID in the format &#39;docker://&lt;container_id&gt;&#39;. +optional | [optional] [default to null]
**image** | [**String**](string.md) | The image the container is running. More info: https://kubernetes.io/docs/concepts/containers/images TODO(dchen1107): Which image the container is running with? | [optional] [default to null]
**imageID** | [**String**](string.md) | ImageID of the container&#39;s image. | [optional] [default to null]
**lastState** | [**v1.ContainerState**](v1.ContainerState.md) |  | [optional] [default to null]
**name** | [**String**](string.md) | This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated. | [optional] [default to null]
**ready** | [**Boolean**](boolean.md) | Specifies whether the container has passed its readiness probe. | [optional] [default to null]
**restartCount** | [**Integer**](integer.md) | The number of times the container has been restarted, currently based on the number of dead containers that have not yet been removed. Note that this is calculated from dead containers. But those containers are subject to garbage collection. This value will get capped at 5 by GC. | [optional] [default to null]
**started** | [**Boolean**](boolean.md) | Specifies whether the container has passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. Is always true when no startupProbe is defined. +optional | [optional] [default to null]
**state** | [**v1.ContainerState**](v1.ContainerState.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

