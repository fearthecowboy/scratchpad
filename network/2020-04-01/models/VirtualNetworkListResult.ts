import { VirtualNetwork } from './VirtualNetwork';
/**
 * @description Response for the ListVirtualNetworks API service call.
 */
export interface VirtualNetworkListResult {
    /**
     * @description A list of VirtualNetwork resources in a resource group.
     */
    value: Array<VirtualNetwork>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
