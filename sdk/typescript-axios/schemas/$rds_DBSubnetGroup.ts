/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $rds_DBSubnetGroup = {
    properties: {
        DBSubnetGroupArn: {
            type: 'string',
        },
        DBSubnetGroupDescription: {
            type: 'string',
        },
        DBSubnetGroupName: {
            type: 'string',
        },
        SubnetGroupStatus: {
            type: 'string',
        },
        Subnets: {
            type: 'array',
            contains: {
                type: 'rds_Subnet',
            },
        },
        VpcId: {
            type: 'string',
        },
    },
};