import { NetworkVirtualAppliance } from './NetworkVirtualAppliance';

/**
 * @description Response for ListNetworkVirtualAppliances API service call.
 * @since 2019-12-01
 */
export interface NetworkVirtualApplianceListResult {
    /**
     * @description List of Network Virtual Appliances.
     */
    value: Array<NetworkVirtualAppliance>;
    /**
     * @description URL to get the next set of results.
     */
    nextLink: string;
}
