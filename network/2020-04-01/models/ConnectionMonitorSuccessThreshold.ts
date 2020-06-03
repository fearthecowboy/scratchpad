
/**
 * @description Describes the threshold for declaring a test successful.
 */
export interface ConnectionMonitorSuccessThreshold {
    /**
     * @description The maximum percentage of failed checks permitted for a test to evaluate as successful.
     */
    checksFailedPercent: int64;
    /**
     * @description The maximum round-trip time in milliseconds permitted for a test to evaluate as successful.
     */
    roundTripTimeMs: double;
}
