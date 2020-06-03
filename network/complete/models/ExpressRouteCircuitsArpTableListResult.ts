import { ExpressRouteCircuitArpTable } from './ExpressRouteCircuitArpTable';

/**
 * @description Response for ListArpTable associated with the Express Route Circuits API.
 */
export interface ExpressRouteCircuitsArpTableListResult {
    /**
     * @description Gets list of the ARP table.
     */
    value: Array<ExpressRouteCircuitArpTable>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
