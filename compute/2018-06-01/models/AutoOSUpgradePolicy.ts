
/**
 * @description The configuration parameters used for performing automatic OS upgrade.
 */
export interface AutoOSUpgradePolicy {
    /**
     * @description Whether OS image rollback feature should be disabled. Default value is false.
     */
    disableAutoRollback: boolean;
}
