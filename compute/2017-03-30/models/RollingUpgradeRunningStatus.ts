import { RollingUpgradeStatusCode } from '../enums/RollingUpgradeStatusCode';
import { RollingUpgradeActionType } from '../enums/RollingUpgradeActionType';
/**
 * @description Information about the current running state of the overall upgrade.
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
