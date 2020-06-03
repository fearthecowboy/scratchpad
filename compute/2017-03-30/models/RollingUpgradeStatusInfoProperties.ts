import { RollingUpgradePolicy } from './RollingUpgradePolicy';
import { RollingUpgradeRunningStatus } from './RollingUpgradeRunningStatus';
import { RollingUpgradeProgressInfo } from './RollingUpgradeProgressInfo';
import { ApiError } from './ApiError';
/**
 * @description The status of the latest virtual machine scale set rolling upgrade.
 */
export interface RollingUpgradeStatusInfoProperties {
    /**
     * @description The rolling upgrade policies applied for this upgrade.
     */
    readonly policy: RollingUpgradePolicy;
    /**
     * @description Information about the current running state of the overall upgrade.
     */
    readonly runningStatus: RollingUpgradeRunningStatus;
    /**
     * @description Information about the number of virtual machine instances in each upgrade state.
     */
    readonly progress: RollingUpgradeProgressInfo;
    /**
     * @description Error details for this upgrade, if there are any.
     */
    readonly error: ApiError;
}
