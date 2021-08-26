# V1ContainerPort
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerPort** | [**Integer**](integer.md) | Number of port to expose on the pod&#39;s IP address. This must be a valid port number, 0 &lt; x &lt; 65536. | [optional] [default to null]
**hostIP** | [**String**](string.md) | What host IP to bind the external port to. +optional | [optional] [default to null]
**hostPort** | [**Integer**](integer.md) | Number of port to expose on the host. If specified, this must be a valid port number, 0 &lt; x &lt; 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. +optional | [optional] [default to null]
**name** | [**String**](string.md) | If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. +optional | [optional] [default to null]
**protocol** | [**String**](string.md) | Protocol for port. Must be UDP, TCP, or SCTP. Defaults to \&quot;TCP\&quot;. +optional +default&#x3D;\&quot;TCP\&quot; | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

