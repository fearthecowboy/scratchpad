
/**
 * @description Code indicating the current status of the upgrade.
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
