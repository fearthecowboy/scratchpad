
/**
 * @description Api input base class for LogAnalytics Api.
 */
export interface LogAnalyticsInputBase {
    /**
     * @description SAS Uri of the logging blob container to which LogAnalytics Api writes output logs to.
     */
    blobContainerSasUri?: string;
    /**
     * @description From time of the query
     */
    fromTime?: dateTime;
    /**
     * @description To time of the query
     */
    toTime?: dateTime;
    /**
     * @description Group query result by Throttle Policy applied.
     */
    groupByThrottlePolicy: boolean;
    /**
     * @description Group query result by Operation Name.
     */
    groupByOperationName: boolean;
    /**
     * @description Group query result by Resource Name.
     */
    groupByResourceName: boolean;
}
