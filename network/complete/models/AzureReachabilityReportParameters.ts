import { AzureReachabilityReportLocation } from './AzureReachabilityReportLocation';

/**
 * @description Geographic and time constraints for Azure reachability report.
 * @since 2017-11-01
 */
export interface AzureReachabilityReportParameters {
    providerLocation?: AzureReachabilityReportLocation;
    /**
     * @description List of Internet service providers.
     */
    providers: Array<string>;
    /**
     * @description Optional Azure regions to scope the query to.
     */
    azureLocations: Array<string>;
    /**
     * @description The start time for the Azure reachability report.
     */
    startTime?: dateTime;
    /**
     * @description The end time for the Azure reachability report.
     */
    endTime?: dateTime;
}
