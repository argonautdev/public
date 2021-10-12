/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_TerragruntParserRequestConfig = {
    properties: {
        eks: {
            type: 'array',
            contains: {
                type: 'types_Cluster',
            },
        },
        elasticache_redis: {
            type: 'array',
            contains: {
                type: 'v1_ElasticacheRedis',
            },
        },
        elasticsearch: {
            type: 'array',
            contains: {
                type: 'v1_Elasticsearch',
            },
        },
        environment: {
            type: 'v1_EnvironmentRequest',
        },
        rds: {
            type: 'array',
            contains: {
                type: 'v1_RDS',
            },
        },
        s3_bucket: {
            type: 'array',
            contains: {
                type: 'v1_AwsS3Bucket',
            },
        },
        s3_static_site: {
            type: 'array',
            contains: {
                type: 'v1_AwsS3StaticSite',
            },
        },
    },
};