
/**
 * @description Code indicating the current status of the upgrade.
 * @since 2017-03-30
 */
export enum RollingUpgradeStatusCode {
    /**
     *
     */
    RollingForward = 'RollingForward',
    /**
     *
     */
    Cancelled = 'Cancelled',
    /**
     *
     */
    Completed = 'Completed',
    /**
     *
     */
    Faulted = 'Faulted'
}
