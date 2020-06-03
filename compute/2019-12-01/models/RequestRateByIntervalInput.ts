import { LogAnalyticsInputBase } from './LogAnalyticsInputBase';
import { IntervalInMins } from '../enums/IntervalInMins';
/**
 * @description Api request input for LogAnalytics getRequestRateByInterval Api.
 */
export interface RequestRateByIntervalInput extends LogAnalyticsInputBase {
    /**
     * @description Interval value in minutes used to create LogAnalytics call rate logs.
     */
    intervalLength?: IntervalInMins;
}
