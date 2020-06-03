import { NetworkInterface } from './NetworkInterface';
/**
 * @description Response for the ListNetworkInterface API service call.
 */
export interface NetworkInterfaceListResult {
    /**
     * @description A list of network interfaces in a resource group.
     */
    value: Array<NetworkInterface>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
