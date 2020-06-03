import { IntervalInMins } from '../enums/IntervalInMins';
import { LogAnalyticsInputBase } from './LogAnalyticsInputBase';

/**
 * @description Api request input for LogAnalytics getRequestRateByInterval Api.
 * @since 2018-06-01
 */
export interface RequestRateByIntervalInput extends LogAnalyticsInputBase {
    /**
     * @description Interval value in minutes used to create LogAnalytics call rate logs.
     */
    intervalLength?: IntervalInMins;
}
