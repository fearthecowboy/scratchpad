
/**
 * @description Specifies the mode of an upgrade to virtual machines in the scale set.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.<br /><br /> **Automatic** - All virtual machines in the scale set are  automatically updated at the same time.
 */
export enum UpgradeMode {
    /**
     *
     */
    Automatic = 'Automatic',
    /**
     *
     */
    Manual = 'Manual',
    /**
     *
     */
    Rolling = 'Rolling'
}
