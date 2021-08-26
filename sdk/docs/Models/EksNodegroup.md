# EksNodegroup
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmiType** | [**String**](string.md) | If the node group was deployed using a launch template with a custom AMI, then this is CUSTOM. For node groups that weren&#39;t deployed using a launch template, this is the AMI type that was specified in the node group configuration. | [optional] [default to null]
**CapacityType** | [**String**](string.md) | The capacity type of your managed node group. | [optional] [default to null]
**ClusterName** | [**String**](string.md) | The name of the cluster that the managed node group resides in. | [optional] [default to null]
**CreatedAt** | [**String**](string.md) | The Unix epoch timestamp in seconds for when the managed node group was created. | [optional] [default to null]
**DiskSize** | [**Integer**](integer.md) | If the node group wasn&#39;t deployed with a launch template, then this is the disk size in the node group configuration. If the node group was deployed with a launch template, then this is null. | [optional] [default to null]
**Health** | [**eks.NodegroupHealth**](eks.NodegroupHealth.md) |  | [optional] [default to null]
**InstanceTypes** | [**List**](string.md) | If the node group wasn&#39;t deployed with a launch template, then this is the instance type that is associated with the node group. If the node group was deployed with a launch template, then this is null. | [optional] [default to null]
**Labels** | [**Map**](string.md) | The Kubernetes labels applied to the nodes in the node group.  Only labels that are applied with the Amazon EKS API are shown here. There may be other Kubernetes labels applied to the nodes in this group. | [optional] [default to null]
**LaunchTemplate** | [**eks.LaunchTemplateSpecification**](eks.LaunchTemplateSpecification.md) |  | [optional] [default to null]
**ModifiedAt** | [**String**](string.md) | The Unix epoch timestamp in seconds for when the managed node group was last modified. | [optional] [default to null]
**NodeRole** | [**String**](string.md) | The IAM role associated with your node group. The Amazon EKS node kubelet daemon makes calls to AWS APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies. | [optional] [default to null]
**NodegroupArn** | [**String**](string.md) | The Amazon Resource Name (ARN) associated with the managed node group. | [optional] [default to null]
**NodegroupName** | [**String**](string.md) | The name associated with an Amazon EKS managed node group. | [optional] [default to null]
**ReleaseVersion** | [**String**](string.md) | If the node group was deployed using a launch template with a custom AMI, then this is the AMI ID that was specified in the launch template. For node groups that weren&#39;t deployed using a launch template, this is the version of the Amazon EKS optimized AMI that the node group was deployed with. | [optional] [default to null]
**RemoteAccess** | [**eks.RemoteAccessConfig**](eks.RemoteAccessConfig.md) |  | [optional] [default to null]
**Resources** | [**eks.NodegroupResources**](eks.NodegroupResources.md) |  | [optional] [default to null]
**ScalingConfig** | [**eks.NodegroupScalingConfig**](eks.NodegroupScalingConfig.md) |  | [optional] [default to null]
**Status** | [**String**](string.md) | The current status of the managed node group. | [optional] [default to null]
**Subnets** | [**List**](string.md) | The subnets that were specified for the Auto Scaling group that is associated with your node group. | [optional] [default to null]
**Tags** | [**Map**](string.md) | The metadata applied to the node group to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Node group tags do not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets. | [optional] [default to null]
**Taints** | [**List**](eks.Taint.md) | The Kubernetes taints to be applied to the nodes in the node group when they are created. Effect is one of NoSchedule, PreferNoSchedule, or NoExecute. Kubernetes taints can be used together with tolerations to control how workloads are scheduled to your nodes. | [optional] [default to null]
**UpdateConfig** | [**eks.NodegroupUpdateConfig**](eks.NodegroupUpdateConfig.md) |  | [optional] [default to null]
**Version** | [**String**](string.md) | The Kubernetes version of the managed node group. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

