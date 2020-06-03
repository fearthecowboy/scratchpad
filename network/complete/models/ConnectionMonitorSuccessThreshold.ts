
/**
 * @description Describes the threshold for declaring a test successful.
 * @since 2019-12-01
 */
export interface ConnectionMonitorSuccessThreshold {
    /**
     * @description The maximum percentage of failed checks permitted for a test to evaluate as successful.
     */
    checksFailedPercent: int64;
    /**
     * @description The maximum round-trip time in milliseconds permitted for a test to evaluate as successful.
     * @Type  '2020-04-01' - type changed from 'int64' to 'double'
     */
    roundTripTimeMs: double;
}
