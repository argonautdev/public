/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $integrations_AwsResources = {
    properties: {
        clusters: {
            type: 'array',
            contains: {
                type: 'integrations_DescribeClusterOutput',
            },
        },
        elasticache: {
            type: 'array',
            contains: {
                type: 'integrations_DescribeElasticacheCluster',
            },
        },
        elasticsearch: {
            type: 'array',
            contains: {
                type: 'integrations_Elasticsearch',
            },
        },
        rds: {
            type: 'array',
            contains: {
                type: 'integrations_DescribeDBInstancesOutput',
            },
        },
        s3_buckets: {
            type: 'array',
            contains: {
                type: 'integrations_BucketsInRegion',
            },
        },
    },
};