import { UpgradeOperationHistoryStatus } from './UpgradeOperationHistoryStatus';
import { RollingUpgradeProgressInfo } from './RollingUpgradeProgressInfo';
import { ApiError } from './ApiError';
import { UpgradeOperationInvoker } from '../enums/UpgradeOperationInvoker';
import { ImageReference } from './ImageReference';
import { RollbackStatusInfo } from './RollbackStatusInfo';
/**
 * @description Describes each OS upgrade on the Virtual Machine Scale Set.
 */
export interface UpgradeOperationHistoricalStatusInfoProperties {
    /**
     * @description Information about the overall status of the upgrade operation.
     */
    readonly runningStatus: UpgradeOperationHistoryStatus;
    /**
     * @description Counts of the VMs in each state.
     */
    readonly progress: RollingUpgradeProgressInfo;
    /**
     * @description Error Details for this upgrade if there are any.
     */
    readonly error: ApiError;
    /**
     * @description Invoker of the Upgrade Operation
     */
    readonly startedBy: UpgradeOperationInvoker;
    /**
     * @description Image Reference details
     */
    readonly targetImageReference: ImageReference;
    /**
     * @description Information about OS rollback if performed
     */
    readonly rollbackInfo: RollbackStatusInfo;
}
