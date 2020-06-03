import { UpgradeState } from '../enums/UpgradeState';

/**
 * @description Information about the current running state of the overall upgrade.
 * @since 2018-06-01
 */
export interface UpgradeOperationHistoryStatus {
    /**
     * @description Code indicating the current status of the upgrade.
     */
    readonly code: UpgradeState;
    /**
     * @description Start time of the upgrade.
     */
    readonly startTime: dateTime ;
    /**
     * @description End time of the upgrade.
     */
    readonly endTime: dateTime ;
}
