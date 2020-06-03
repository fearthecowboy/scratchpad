import { AzureReachabilityReportItem } from './AzureReachabilityReportItem';
import { AzureReachabilityReportLocation } from './AzureReachabilityReportLocation';

/**
 * @description Azure reachability report details.
 * @since 2017-11-01
 */
export interface AzureReachabilityReport {
    /**
     * @description The aggregation level of Azure reachability report. Can be Country, State or City.
     */
    aggregationLevel?: string;
    providerLocation?: AzureReachabilityReportLocation;
    /**
     * @description List of Azure reachability report items.
     */
    reachabilityReport?: Array<AzureReachabilityReportItem>;
}
