
/**
 * @description Parameters that define the retention policy for flow log.
 */
export interface RetentionPolicyParameters {
    /**
     * @description Number of days to retain flow log records.
     */
    days: int64;
    /**
     * @description Flag to enable/disable retention.
     */
    enabled: boolean;
}
