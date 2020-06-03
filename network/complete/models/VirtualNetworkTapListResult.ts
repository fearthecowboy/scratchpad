import { VirtualNetworkTap } from './VirtualNetworkTap';

/**
 * @description Response for ListVirtualNetworkTap API service call.
 * @since 2019-07-01
 */
export interface VirtualNetworkTapListResult {
    /**
     * @description A list of VirtualNetworkTaps in a resource group.
     */
    value: Array<VirtualNetworkTap>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
