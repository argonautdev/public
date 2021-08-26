# EksRemoteAccessConfig
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ec2SshKey** | [**String**](string.md) | The Amazon EC2 SSH key that provides access for SSH communication with the nodes in the managed node group. For more information, see Amazon EC2 Key Pairs (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) in the Amazon Elastic Compute Cloud User Guide for Linux Instances. | [optional] [default to null]
**SourceSecurityGroups** | [**List**](string.md) | The security groups that are allowed SSH access (port 22) to the nodes. If you specify an Amazon EC2 SSH key but do not specify a source security group when you create a managed node group, then port 22 on the nodes is opened to the internet (0.0.0.0/0). For more information, see Security Groups for Your VPC (https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html) in the Amazon Virtual Private Cloud User Guide. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

