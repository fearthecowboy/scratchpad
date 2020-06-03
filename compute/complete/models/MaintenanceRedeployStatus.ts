import { MaintenanceOperationResultCodeTypes } from '../enums/MaintenanceOperationResultCodeTypes';

/**
 * @description Maintenance Operation Status.
 * @since 2017-03-30
 */
export interface MaintenanceRedeployStatus {
    /**
     * @description True, if customer is allowed to perform Maintenance.
     */
    isCustomerInitiatedMaintenanceAllowed: boolean;
    /**
     * @description Start Time for the Pre Maintenance Window.
     */
    preMaintenanceWindowStartTime: dateTime;
    /**
     * @description End Time for the Pre Maintenance Window.
     */
    preMaintenanceWindowEndTime: dateTime;
    /**
     * @description Start Time for the Maintenance Window.
     */
    maintenanceWindowStartTime: dateTime;
    /**
     * @description End Time for the Maintenance Window.
     */
    maintenanceWindowEndTime: dateTime;
    /**
     * @description The Last Maintenance Operation Result Code.
     */
    lastOperationResultCode: MaintenanceOperationResultCodeTypes;
    /**
     * @description Message returned for the last Maintenance Operation.
     */
    lastOperationMessage: string;
}
