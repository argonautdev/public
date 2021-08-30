/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $rds_DescribeDBInstancesOutput = {
    properties: {
        DBInstances: {
            type: 'array',
            contains: {
                type: 'rds_DBInstance',
            },
        },
        Marker: {
            type: 'string',
        },
    },
};