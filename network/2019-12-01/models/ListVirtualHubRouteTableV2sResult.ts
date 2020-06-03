import { VirtualHubRouteTableV2 } from './VirtualHubRouteTableV2';
/**
 * @description List of VirtualHubRouteTableV2s and a URL nextLink to get the next set of results.
 */
export interface ListVirtualHubRouteTableV2sResult {
    /**
     * @description List of VirtualHubRouteTableV2s.
     */
    value: Array<VirtualHubRouteTableV2>;
    /**
     * @description URL to get the next set of operation list results if there are any.
     */
    nextLink: string;
}
