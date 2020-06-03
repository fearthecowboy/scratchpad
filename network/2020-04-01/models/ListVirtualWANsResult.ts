import { VirtualWAN } from './VirtualWAN';
/**
 * @description Result of the request to list VirtualWANs. It contains a list of VirtualWANs and a URL nextLink to get the next set of results.
 */
export interface ListVirtualWANsResult {
    /**
     * @description List of VirtualWANs.
     */
    value: Array<VirtualWAN>;
    /**
     * @description URL to get the next set of operation list results if there are any.
     */
    nextLink: string;
}
