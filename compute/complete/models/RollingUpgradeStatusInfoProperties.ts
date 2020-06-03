import { ApiError } from './ApiError';
import { RollingUpgradePolicy } from './RollingUpgradePolicy';
import { RollingUpgradeProgressInfo } from './RollingUpgradeProgressInfo';
import { RollingUpgradeRunningStatus } from './RollingUpgradeRunningStatus';

/**
 * @description The status of the latest virtual machine scale set rolling upgrade.
 * @since 2017-03-30
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
