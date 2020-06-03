import { LogAnalyticsOutput } from './LogAnalyticsOutput';

/**
 * @description LogAnalytics operation status response
 * @since 2018-06-01
 */
export interface LogAnalyticsOperationResult {
    /**
     * @description LogAnalyticsOutput
     */
    readonly properties: LogAnalyticsOutput;
}
