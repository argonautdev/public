# EksVpcConfigResponse
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClusterSecurityGroupId** | [**String**](string.md) | The cluster security group that was created by Amazon EKS for the cluster. Managed node groups use this security group for control-plane-to-data-plane communication. | [optional] [default to null]
**EndpointPrivateAccess** | [**Boolean**](boolean.md) | This parameter indicates whether the Amazon EKS private API server endpoint is enabled. If the Amazon EKS private API server endpoint is enabled, Kubernetes API requests that originate from within your cluster&#39;s VPC use the private VPC endpoint instead of traversing the internet. If this value is disabled and you have nodes or AWS Fargate pods in the cluster, then ensure that publicAccessCidrs includes the necessary CIDR blocks for communication with the nodes or Fargate pods. For more information, see Amazon EKS Cluster Endpoint Access Control (https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the Amazon EKS User Guide . | [optional] [default to null]
**EndpointPublicAccess** | [**Boolean**](boolean.md) | This parameter indicates whether the Amazon EKS public API server endpoint is enabled. If the Amazon EKS public API server endpoint is disabled, your cluster&#39;s Kubernetes API server can only receive requests that originate from within the cluster VPC. | [optional] [default to null]
**PublicAccessCidrs** | [**List**](string.md) | The CIDR blocks that are allowed access to your cluster&#39;s public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the listed CIDR blocks is denied. The default value is 0.0.0.0/0. If you&#39;ve disabled private endpoint access and you have nodes or AWS Fargate pods in the cluster, then ensure that the necessary CIDR blocks are listed. For more information, see Amazon EKS Cluster Endpoint Access Control (https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the Amazon EKS User Guide . | [optional] [default to null]
**SecurityGroupIds** | [**List**](string.md) | The security groups associated with the cross-account elastic network interfaces that are used to allow communication between your nodes and the Kubernetes control plane. | [optional] [default to null]
**SubnetIds** | [**List**](string.md) | The subnets associated with your cluster. | [optional] [default to null]
**VpcId** | [**String**](string.md) | The VPC associated with your cluster. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

