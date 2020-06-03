
/**
 * @description The configuration parameters used for performing automatic OS upgrade.
 * @since 2019-12-01
 */
export interface AutomaticOSUpgradePolicy {
    /**
     * @description Indicates whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the OS image becomes available. Default value is false. <br><br> If this is set to true for Windows based scale sets, [enableAutomaticUpdates](https://docs.microsoft.com/dotnet/api/microsoft.azure.management.compute.models.windowsconfiguration.enableautomaticupdates?view=azure-dotnet) is automatically set to false and cannot be set to true.
     */
    enableAutomaticOSUpgrade: boolean;
    /**
     * @description Whether OS image rollback feature should be disabled. Default value is false.
     */
    disableAutomaticRollback: boolean;
}
