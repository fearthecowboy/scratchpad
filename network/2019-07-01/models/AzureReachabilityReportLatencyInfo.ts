
/**
 * @description Details on latency for a time series.
 */
export interface AzureReachabilityReportLatencyInfo {
    /**
     * @description The time stamp.
     */
    timeStamp: dateTime;
    /**
     * @description The relative latency score between 1 and 100, higher values indicating a faster connection.
     */
    score: int64 & Minimum<1> & Maximum<100>;
}
