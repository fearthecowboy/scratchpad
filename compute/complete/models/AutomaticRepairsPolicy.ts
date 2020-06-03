
/**
 * @description Specifies the configuration parameters for automatic repairs on the virtual machine scale set.
 * @since 2019-12-01
 */
export interface AutomaticRepairsPolicy {
    /**
     * @description Specifies whether automatic repairs should be enabled on the virtual machine scale set. The default value is false.
     */
    enabled: boolean;
    /**
     * @description The amount of time for which automatic repairs are suspended due to a state change on VM. The grace time starts after the state change has completed. This helps avoid premature or accidental repairs. The time duration should be specified in ISO 8601 format. The minimum allowed grace period is 30 minutes (PT30M), which is also the default value. The maximum allowed grace period is 90 minutes (PT90M).
     */
    gracePeriod: string;
}
