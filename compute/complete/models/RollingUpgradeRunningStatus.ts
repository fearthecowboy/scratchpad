import { RollingUpgradeActionType } from '../enums/RollingUpgradeActionType';
import { RollingUpgradeStatusCode } from '../enums/RollingUpgradeStatusCode';

/**
 * @description Information about the current running state of the overall upgrade.
 * @since 2017-03-30
 */
export interface RollingUpgradeRunningStatus {
    /**
     * @description Code indicating the current status of the upgrade.
     */
    readonly code: RollingUpgradeStatusCode;
    /**
     * @description Start time of the upgrade.
     */
    readonly startTime: dateTime ;
    /**
     * @description The last action performed on the rolling upgrade.
     */
    readonly lastAction: RollingUpgradeActionType;
    /**
     * @description Last action time of the upgrade.
     */
    readonly lastActionTime: dateTime ;
}
