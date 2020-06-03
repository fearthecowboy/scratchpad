
/**
 * @description Code indicating the current status of the upgrade.
 * @since 2018-06-01
 */
export enum UpgradeState {
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
