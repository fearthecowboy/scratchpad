
/**
 * @description The configuration parameters used while performing a rolling upgrade.
 */
export interface RollingUpgradePolicy {
    /**
     * @description The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. The default value for this parameter is 20%.
     */
    maxBatchInstancePercent: int32 & Minimum<5> & Maximum<100>;
    /**
     * @description The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. The default value for this parameter is 20%.
     */
    maxUnhealthyInstancePercent: int32 & Minimum<5> & Maximum<100>;
    /**
     * @description The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. The default value for this parameter is 20%.
     */
    maxUnhealthyUpgradedInstancePercent: int32 & Minimum<0> & Maximum<100>;
    /**
     * @description The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format. The default value is 0 seconds (PT0S).
     */
    pauseTimeBetweenBatches: string;
}
