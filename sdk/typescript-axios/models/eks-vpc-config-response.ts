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
 * @interface EksVpcConfigResponse
 */
export interface EksVpcConfigResponse {
    /**
     * The cluster security group that was created by Amazon EKS for the cluster. Managed node groups use this security group for control-plane-to-data-plane communication.
     * @type {string}
     * @memberof EksVpcConfigResponse
     */
    ClusterSecurityGroupId?: string;
    /**
     * This parameter indicates whether the Amazon EKS private API server endpoint is enabled. If the Amazon EKS private API server endpoint is enabled, Kubernetes API requests that originate from within your cluster\'s VPC use the private VPC endpoint instead of traversing the internet. If this value is disabled and you have nodes or AWS Fargate pods in the cluster, then ensure that publicAccessCidrs includes the necessary CIDR blocks for communication with the nodes or Fargate pods. For more information, see Amazon EKS Cluster Endpoint Access Control (https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the Amazon EKS User Guide .
     * @type {boolean}
     * @memberof EksVpcConfigResponse
     */
    EndpointPrivateAccess?: boolean;
    /**
     * This parameter indicates whether the Amazon EKS public API server endpoint is enabled. If the Amazon EKS public API server endpoint is disabled, your cluster\'s Kubernetes API server can only receive requests that originate from within the cluster VPC.
     * @type {boolean}
     * @memberof EksVpcConfigResponse
     */
    EndpointPublicAccess?: boolean;
    /**
     * The CIDR blocks that are allowed access to your cluster\'s public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the listed CIDR blocks is denied. The default value is 0.0.0.0/0. If you\'ve disabled private endpoint access and you have nodes or AWS Fargate pods in the cluster, then ensure that the necessary CIDR blocks are listed. For more information, see Amazon EKS Cluster Endpoint Access Control (https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the Amazon EKS User Guide .
     * @type {Array<string>}
     * @memberof EksVpcConfigResponse
     */
    PublicAccessCidrs?: Array<string>;
    /**
     * The security groups associated with the cross-account elastic network interfaces that are used to allow communication between your nodes and the Kubernetes control plane.
     * @type {Array<string>}
     * @memberof EksVpcConfigResponse
     */
    SecurityGroupIds?: Array<string>;
    /**
     * The subnets associated with your cluster.
     * @type {Array<string>}
     * @memberof EksVpcConfigResponse
     */
    SubnetIds?: Array<string>;
    /**
     * The VPC associated with your cluster.
     * @type {string}
     * @memberof EksVpcConfigResponse
     */
    VpcId?: string;
}


