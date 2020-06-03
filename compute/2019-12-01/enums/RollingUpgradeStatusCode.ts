
/**
 * @description Code indicating the current status of the upgrade.
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
