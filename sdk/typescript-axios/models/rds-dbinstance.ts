/* tslint:disable */
/* eslint-disable */
/**
 * Midgard API Docs
 * This is the docs for midgard api for argonaut
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { RdsDBInstanceAutomatedBackupsReplication } from './rds-dbinstance-automated-backups-replication';
import { RdsDBInstanceRole } from './rds-dbinstance-role';
import { RdsDBInstanceStatusInfo } from './rds-dbinstance-status-info';
import { RdsDBParameterGroupStatus } from './rds-dbparameter-group-status';
import { RdsDBSecurityGroupMembership } from './rds-dbsecurity-group-membership';
import { RdsDBSubnetGroup } from './rds-dbsubnet-group';
import { RdsDomainMembership } from './rds-domain-membership';
import { RdsEndpoint } from './rds-endpoint';
import { RdsOptionGroupMembership } from './rds-option-group-membership';
import { RdsPendingModifiedValues } from './rds-pending-modified-values';
import { RdsProcessorFeature } from './rds-processor-feature';
import { RdsTag } from './rds-tag';
import { RdsVpcSecurityGroupMembership } from './rds-vpc-security-group-membership';

/**
 * 
 * @export
 * @interface RdsDBInstance
 */
export interface RdsDBInstance {
    /**
     * Specifies the allocated storage size specified in gibibytes.
     * @type {number}
     * @memberof RdsDBInstance
     */
    AllocatedStorage?: number;
    /**
     * The AWS Identity and Access Management (IAM) roles associated with the DB instance.
     * @type {Array<RdsDBInstanceRole>}
     * @memberof RdsDBInstance
     */
    AssociatedRoles?: Array<RdsDBInstanceRole>;
    /**
     * A value that indicates that minor version patches are applied automatically.
     * @type {boolean}
     * @memberof RdsDBInstance
     */
    AutoMinorVersionUpgrade?: boolean;
    /**
     * Specifies the name of the Availability Zone the DB instance is located in.
     * @type {string}
     * @memberof RdsDBInstance
     */
    AvailabilityZone?: string;
    /**
     * The Amazon Resource Name (ARN) of the recovery point in AWS Backup.
     * @type {string}
     * @memberof RdsDBInstance
     */
    AwsBackupRecoveryPointArn?: string;
    /**
     * Specifies the number of days for which automatic DB snapshots are retained.
     * @type {number}
     * @memberof RdsDBInstance
     */
    BackupRetentionPeriod?: number;
    /**
     * The identifier of the CA certificate for this DB instance.
     * @type {string}
     * @memberof RdsDBInstance
     */
    CACertificateIdentifier?: string;
    /**
     * If present, specifies the name of the character set that this instance is associated with.
     * @type {string}
     * @memberof RdsDBInstance
     */
    CharacterSetName?: string;
    /**
     * Specifies whether tags are copied from the DB instance to snapshots of the DB instance.  Amazon Aurora  Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting. For more information, see DBCluster.
     * @type {boolean}
     * @memberof RdsDBInstance
     */
    CopyTagsToSnapshot?: boolean;
    /**
     * Specifies whether a customer-owned IP address (CoIP) is enabled for an RDS on Outposts DB instance.  A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network.  For more information about RDS on Outposts, see Working with Amazon RDS on AWS Outposts (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the Amazon RDS User Guide.  For more information about CoIPs, see Customer-owned IP addresses (https://docs.aws.amazon.com/outposts/latest/userguide/outposts-networking-components.html#ip-addressing) in the AWS Outposts User Guide.
     * @type {boolean}
     * @memberof RdsDBInstance
     */
    CustomerOwnedIpEnabled?: boolean;
    /**
     * If the DB instance is a member of a DB cluster, contains the name of the DB cluster that the DB instance is a member of.
     * @type {string}
     * @memberof RdsDBInstance
     */
    DBClusterIdentifier?: string;
    /**
     * The Amazon Resource Name (ARN) for the DB instance.
     * @type {string}
     * @memberof RdsDBInstance
     */
    DBInstanceArn?: string;
    /**
     * The list of replicated automated backups associated with the DB instance.
     * @type {Array<RdsDBInstanceAutomatedBackupsReplication>}
     * @memberof RdsDBInstance
     */
    DBInstanceAutomatedBackupsReplications?: Array<RdsDBInstanceAutomatedBackupsReplication>;
    /**
     * Contains the name of the compute and memory capacity class of the DB instance.
     * @type {string}
     * @memberof RdsDBInstance
     */
    DBInstanceClass?: string;
    /**
     * Contains a user-supplied database identifier. This identifier is the unique key that identifies a DB instance.
     * @type {string}
     * @memberof RdsDBInstance
     */
    DBInstanceIdentifier?: string;
    /**
     * Specifies the current state of this database.  For information about DB instance statuses, see Viewing DB instance status (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/accessing-monitoring.html#Overview.DBInstance.Status) in the Amazon RDS User Guide.
     * @type {string}
     * @memberof RdsDBInstance
     */
    DBInstanceStatus?: string;
    /**
     * The meaning of this parameter differs according to the database engine you use.  MySQL, MariaDB, SQL Server, PostgreSQL  Contains the name of the initial database of this instance that was provided at create time, if one was specified when the DB instance was created. This same name is returned for the life of the DB instance.  Type: String  Oracle  Contains the Oracle System ID (SID) of the created DB instance. Not shown when the returned parameters do not apply to an Oracle DB instance.
     * @type {string}
     * @memberof RdsDBInstance
     */
    DBName?: string;
    /**
     * Provides the list of DB parameter groups applied to this DB instance.
     * @type {Array<RdsDBParameterGroupStatus>}
     * @memberof RdsDBInstance
     */
    DBParameterGroups?: Array<RdsDBParameterGroupStatus>;
    /**
     * A list of DB security group elements containing DBSecurityGroup.Name and DBSecurityGroup.Status subelements.
     * @type {Array<RdsDBSecurityGroupMembership>}
     * @memberof RdsDBInstance
     */
    DBSecurityGroups?: Array<RdsDBSecurityGroupMembership>;
    /**
     * 
     * @type {RdsDBSubnetGroup}
     * @memberof RdsDBInstance
     */
    DBSubnetGroup?: RdsDBSubnetGroup;
    /**
     * Specifies the port that the DB instance listens on. If the DB instance is part of a DB cluster, this can be a different port than the DB cluster port.
     * @type {number}
     * @memberof RdsDBInstance
     */
    DbInstancePort?: number;
    /**
     * The AWS Region-unique, immutable identifier for the DB instance. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS customer master key (CMK) for the DB instance is accessed.
     * @type {string}
     * @memberof RdsDBInstance
     */
    DbiResourceId?: string;
    /**
     * Indicates if the DB instance has deletion protection enabled. The database can\'t be deleted when deletion protection is enabled. For more information, see Deleting a DB Instance (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html).
     * @type {boolean}
     * @memberof RdsDBInstance
     */
    DeletionProtection?: boolean;
    /**
     * The Active Directory Domain membership records associated with the DB instance.
     * @type {Array<RdsDomainMembership>}
     * @memberof RdsDBInstance
     */
    DomainMemberships?: Array<RdsDomainMembership>;
    /**
     * A list of log types that this DB instance is configured to export to CloudWatch Logs.  Log types vary by DB engine. For information about the log types for each DB engine, see Amazon RDS Database Log Files (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html) in the Amazon RDS User Guide.
     * @type {Array<string>}
     * @memberof RdsDBInstance
     */
    EnabledCloudwatchLogsExports?: Array<string>;
    /**
     * 
     * @type {RdsEndpoint}
     * @memberof RdsDBInstance
     */
    Endpoint?: RdsEndpoint;
    /**
     * The name of the database engine to be used for this DB instance.
     * @type {string}
     * @memberof RdsDBInstance
     */
    Engine?: string;
    /**
     * Indicates the database engine version.
     * @type {string}
     * @memberof RdsDBInstance
     */
    EngineVersion?: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log stream that receives the Enhanced Monitoring metrics data for the DB instance.
     * @type {string}
     * @memberof RdsDBInstance
     */
    EnhancedMonitoringResourceArn?: string;
    /**
     * True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.  IAM database authentication can be enabled for the following database engines     * For MySQL 5.6, minor version 5.6.34 or higher     * For MySQL 5.7, minor version 5.7.16 or higher     * Aurora 5.6 or higher. To enable IAM database authentication for Aurora,    see DBCluster Type.
     * @type {boolean}
     * @memberof RdsDBInstance
     */
    IAMDatabaseAuthenticationEnabled?: boolean;
    /**
     * Provides the date and time the DB instance was created.
     * @type {string}
     * @memberof RdsDBInstance
     */
    InstanceCreateTime?: string;
    /**
     * Specifies the Provisioned IOPS (I/O operations per second) value.
     * @type {number}
     * @memberof RdsDBInstance
     */
    Iops?: number;
    /**
     * If StorageEncrypted is true, the AWS KMS key identifier for the encrypted DB instance.  The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the AWS KMS customer master key (CMK).
     * @type {string}
     * @memberof RdsDBInstance
     */
    KmsKeyId?: string;
    /**
     * Specifies the latest time to which a database can be restored with point-in-time restore.
     * @type {string}
     * @memberof RdsDBInstance
     */
    LatestRestorableTime?: string;
    /**
     * License model information for this DB instance.
     * @type {string}
     * @memberof RdsDBInstance
     */
    LicenseModel?: string;
    /**
     * 
     * @type {RdsEndpoint}
     * @memberof RdsDBInstance
     */
    ListenerEndpoint?: RdsEndpoint;
    /**
     * Contains the master username for the DB instance.
     * @type {string}
     * @memberof RdsDBInstance
     */
    MasterUsername?: string;
    /**
     * The upper limit to which Amazon RDS can automatically scale the storage of the DB instance.
     * @type {number}
     * @memberof RdsDBInstance
     */
    MaxAllocatedStorage?: number;
    /**
     * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.
     * @type {number}
     * @memberof RdsDBInstance
     */
    MonitoringInterval?: number;
    /**
     * The ARN for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.
     * @type {string}
     * @memberof RdsDBInstance
     */
    MonitoringRoleArn?: string;
    /**
     * Specifies if the DB instance is a Multi-AZ deployment.
     * @type {boolean}
     * @memberof RdsDBInstance
     */
    MultiAZ?: boolean;
    /**
     * The name of the NCHAR character set for the Oracle DB instance. This character set specifies the Unicode encoding for data stored in table columns of type NCHAR, NCLOB, or NVARCHAR2.
     * @type {string}
     * @memberof RdsDBInstance
     */
    NcharCharacterSetName?: string;
    /**
     * Provides the list of option group memberships for this DB instance.
     * @type {Array<RdsOptionGroupMembership>}
     * @memberof RdsDBInstance
     */
    OptionGroupMemberships?: Array<RdsOptionGroupMembership>;
    /**
     * 
     * @type {RdsPendingModifiedValues}
     * @memberof RdsDBInstance
     */
    PendingModifiedValues?: RdsPendingModifiedValues;
    /**
     * True if Performance Insights is enabled for the DB instance, and otherwise false.
     * @type {boolean}
     * @memberof RdsDBInstance
     */
    PerformanceInsightsEnabled?: boolean;
    /**
     * The AWS KMS key identifier for encryption of Performance Insights data.  The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the AWS KMS customer master key (CMK).
     * @type {string}
     * @memberof RdsDBInstance
     */
    PerformanceInsightsKMSKeyId?: string;
    /**
     * The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years).
     * @type {number}
     * @memberof RdsDBInstance
     */
    PerformanceInsightsRetentionPeriod?: number;
    /**
     * Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod.
     * @type {string}
     * @memberof RdsDBInstance
     */
    PreferredBackupWindow?: string;
    /**
     * Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
     * @type {string}
     * @memberof RdsDBInstance
     */
    PreferredMaintenanceWindow?: string;
    /**
     * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
     * @type {Array<RdsProcessorFeature>}
     * @memberof RdsDBInstance
     */
    ProcessorFeatures?: Array<RdsProcessorFeature>;
    /**
     * A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see Fault Tolerance for an Aurora DB Cluster (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance) in the Amazon Aurora User Guide.
     * @type {number}
     * @memberof RdsDBInstance
     */
    PromotionTier?: number;
    /**
     * Specifies the accessibility options for the DB instance.  When the DB instance is publicly accessible, its DNS endpoint resolves to the private IP address from within the DB instance\'s VPC, and to the public IP address from outside of the DB instance\'s VPC. Access to the DB instance is ultimately controlled by the security group it uses, and that public access is not permitted if the security group assigned to the DB instance doesn\'t permit it.  When the DB instance isn\'t publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.  For more information, see CreateDBInstance.
     * @type {boolean}
     * @memberof RdsDBInstance
     */
    PubliclyAccessible?: boolean;
    /**
     * Contains one or more identifiers of Aurora DB clusters to which the RDS DB instance is replicated as a read replica. For example, when you create an Aurora read replica of an RDS MySQL DB instance, the Aurora MySQL DB cluster for the Aurora read replica is shown. This output does not contain information about cross region Aurora read replicas.  Currently, each RDS DB instance can have only one Aurora read replica.
     * @type {Array<string>}
     * @memberof RdsDBInstance
     */
    ReadReplicaDBClusterIdentifiers?: Array<string>;
    /**
     * Contains one or more identifiers of the read replicas associated with this DB instance.
     * @type {Array<string>}
     * @memberof RdsDBInstance
     */
    ReadReplicaDBInstanceIdentifiers?: Array<string>;
    /**
     * Contains the identifier of the source DB instance if this DB instance is a read replica.
     * @type {string}
     * @memberof RdsDBInstance
     */
    ReadReplicaSourceDBInstanceIdentifier?: string;
    /**
     * The open mode of an Oracle read replica. The default is open-read-only. For more information, see Working with Oracle Read Replicas for Amazon RDS (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) in the Amazon RDS User Guide.  This attribute is only supported in RDS for Oracle.
     * @type {string}
     * @memberof RdsDBInstance
     */
    ReplicaMode?: string;
    /**
     * If present, specifies the name of the secondary Availability Zone for a DB instance with multi-AZ support.
     * @type {string}
     * @memberof RdsDBInstance
     */
    SecondaryAvailabilityZone?: string;
    /**
     * The status of a read replica. If the instance isn\'t a read replica, this is blank.
     * @type {Array<RdsDBInstanceStatusInfo>}
     * @memberof RdsDBInstance
     */
    StatusInfos?: Array<RdsDBInstanceStatusInfo>;
    /**
     * Specifies whether the DB instance is encrypted.
     * @type {boolean}
     * @memberof RdsDBInstance
     */
    StorageEncrypted?: boolean;
    /**
     * Specifies the storage type associated with DB instance.
     * @type {string}
     * @memberof RdsDBInstance
     */
    StorageType?: string;
    /**
     * A list of tags. For more information, see Tagging Amazon RDS Resources (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the Amazon RDS User Guide.
     * @type {Array<RdsTag>}
     * @memberof RdsDBInstance
     */
    TagList?: Array<RdsTag>;
    /**
     * The ARN from the key store with which the instance is associated for TDE encryption.
     * @type {string}
     * @memberof RdsDBInstance
     */
    TdeCredentialArn?: string;
    /**
     * The time zone of the DB instance. In most cases, the Timezone element is empty. Timezone content appears only for Microsoft SQL Server DB instances that were created with a time zone specified.
     * @type {string}
     * @memberof RdsDBInstance
     */
    Timezone?: string;
    /**
     * Provides a list of VPC security group elements that the DB instance belongs to.
     * @type {Array<RdsVpcSecurityGroupMembership>}
     * @memberof RdsDBInstance
     */
    VpcSecurityGroups?: Array<RdsVpcSecurityGroupMembership>;
}


