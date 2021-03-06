import { VirtualNetworkUsage } from './VirtualNetworkUsage';

/**
 * @description Response for the virtual networks GetUsage API service call.
 * @since 2017-11-01
 */
export interface VirtualNetworkListUsageResult {
    /**
     * @description VirtualNetwork usage stats.
     */
    readonly value: Array<VirtualNetworkUsage>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
