/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $elasticsearchservice_AutoTuneOptions = {
    properties: {
        DesiredState: {
            type: 'string',
        },
        MaintenanceSchedules: {
            type: 'array',
            contains: {
                type: 'elasticsearchservice_AutoTuneMaintenanceSchedule',
            },
        },
        RollbackOnDisable: {
            type: 'string',
        },
    },
};