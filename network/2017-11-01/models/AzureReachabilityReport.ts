import { AzureReachabilityReportLocation } from './AzureReachabilityReportLocation';
import { AzureReachabilityReportItem } from './AzureReachabilityReportItem';
/**
 * @description Azure reachability report details.
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
