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
 * @interface EksRemoteAccessConfig
 */
export interface EksRemoteAccessConfig {
    /**
     * The Amazon EC2 SSH key that provides access for SSH communication with the nodes in the managed node group. For more information, see Amazon EC2 Key Pairs (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) in the Amazon Elastic Compute Cloud User Guide for Linux Instances.
     * @type {string}
     * @memberof EksRemoteAccessConfig
     */
    Ec2SshKey?: string;
    /**
     * The security groups that are allowed SSH access (port 22) to the nodes. If you specify an Amazon EC2 SSH key but do not specify a source security group when you create a managed node group, then port 22 on the nodes is opened to the internet (0.0.0.0/0). For more information, see Security Groups for Your VPC (https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html) in the Amazon Virtual Private Cloud User Guide.
     * @type {Array<string>}
     * @memberof EksRemoteAccessConfig
     */
    SourceSecurityGroups?: Array<string>;
}


