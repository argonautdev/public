/* tslint:disable */
/* eslint-disable */
/**
 * Midgard API Docs
 * This is the docs for midgard api for argonaut
 *
 * The version of the OpenAPI document: 0.4.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface EksIssue
 */
export interface EksIssue {
    /**
     * A brief description of the error.     * AccessDenied: Amazon EKS or one or more of your managed nodes is failing    to authenticate or authorize with your Kubernetes cluster API server.     * AsgInstanceLaunchFailures: Your Auto Scaling group is experiencing failures    while attempting to launch instances.     * AutoScalingGroupNotFound: We couldn\'t find the Auto Scaling group associated    with the managed node group. You may be able to recreate an Auto Scaling    group with the same settings to recover.     * ClusterUnreachable: Amazon EKS or one or more of your managed nodes    is unable to to communicate with your Kubernetes cluster API server. This    can happen if there are network disruptions or if API servers are timing    out processing requests.     * Ec2LaunchTemplateNotFound: We couldn\'t find the Amazon EC2 launch template    for your managed node group. You may be able to recreate a launch template    with the same settings to recover.     * Ec2LaunchTemplateVersionMismatch: The Amazon EC2 launch template version    for your managed node group does not match the version that Amazon EKS    created. You may be able to revert to the version that Amazon EKS created    to recover.     * Ec2SecurityGroupDeletionFailure: We could not delete the remote access    security group for your managed node group. Remove any dependencies from    the security group.     * Ec2SecurityGroupNotFound: We couldn\'t find the cluster security group    for the cluster. You must recreate your cluster.     * Ec2SubnetInvalidConfiguration: One or more Amazon EC2 subnets specified    for a node group do not automatically assign public IP addresses to instances    launched into it. If you want your instances to be assigned a public IP    address, then you need to enable the auto-assign public IP address setting    for the subnet. See Modifying the public IPv4 addressing attribute for    your subnet (https://docs.aws.amazon.com/vpc/latest/userguide/vpc-ip-addressing.html#subnet-public-ip)    in the Amazon VPC User Guide.     * IamInstanceProfileNotFound: We couldn\'t find the IAM instance profile    for your managed node group. You may be able to recreate an instance profile    with the same settings to recover.     * IamNodeRoleNotFound: We couldn\'t find the IAM role for your managed    node group. You may be able to recreate an IAM role with the same settings    to recover.     * InstanceLimitExceeded: Your AWS account is unable to launch any more    instances of the specified instance type. You may be able to request an    Amazon EC2 instance limit increase to recover.     * InsufficientFreeAddresses: One or more of the subnets associated with    your managed node group does not have enough available IP addresses for    new nodes.     * InternalFailure: These errors are usually caused by an Amazon EKS server-side    issue.     * NodeCreationFailure: Your launched instances are unable to register    with your Amazon EKS cluster. Common causes of this failure are insufficient    worker node IAM role (https://docs.aws.amazon.com/eks/latest/userguide/worker_node_IAM_role.html)    permissions or lack of outbound internet access for the nodes.
     * @type {string}
     * @memberof EksIssue
     */
    Code?: string;
    /**
     * The error message associated with the issue.
     * @type {string}
     * @memberof EksIssue
     */
    Message?: string;
    /**
     * The AWS resources that are afflicted by this issue.
     * @type {Array<string>}
     * @memberof EksIssue
     */
    ResourceIds?: Array<string>;
}


