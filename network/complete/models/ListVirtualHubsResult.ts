import { VirtualHub } from './VirtualHub';

/**
 * @description Result of the request to list VirtualHubs. It contains a list of VirtualHubs and a URL nextLink to get the next set of results.
 * @since 2019-07-01
 */
export interface ListVirtualHubsResult {
    /**
     * @description List of VirtualHubs.
     */
    value: Array<VirtualHub>;
    /**
     * @description URL to get the next set of operation list results if there are any.
     */
    nextLink: string;
}
