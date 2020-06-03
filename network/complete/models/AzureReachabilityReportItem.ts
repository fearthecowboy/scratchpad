import { AzureReachabilityReportLatencyInfo } from './AzureReachabilityReportLatencyInfo';

/**
 * @description Azure reachability report details for a given provider location.
 * @since 2017-11-01
 */
export interface AzureReachabilityReportItem {
    /**
     * @description The Internet service provider.
     */
    provider: string;
    /**
     * @description The Azure region.
     */
    azureLocation: string;
    /**
     * @description List of latency details for each of the time series.
     */
    latencies: Array<AzureReachabilityReportLatencyInfo>;
}
