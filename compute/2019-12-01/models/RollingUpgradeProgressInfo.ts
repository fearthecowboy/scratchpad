
/**
 * @description Information about the number of virtual machine instances in each upgrade state.
 */
export interface RollingUpgradeProgressInfo {
    /**
     * @description The number of instances that have been successfully upgraded.
     */
    readonly successfulInstanceCount: int32;
    /**
     * @description The number of instances that have failed to be upgraded successfully.
     */
    readonly failedInstanceCount: int32;
    /**
     * @description The number of instances that are currently being upgraded.
     */
    readonly inProgressInstanceCount: int32;
    /**
     * @description The number of instances that have not yet begun to be upgraded.
     */
    readonly pendingInstanceCount: int32;
}
