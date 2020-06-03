import { ExpressRouteCircuitArpTable } from './ExpressRouteCircuitArpTable';
/**
 * @description Response for ListArpTable associated with the Express Route Circuits API.
 */
export interface ExpressRouteCircuitsArpTableListResult {
    /**
     * @description A list of the ARP tables.
     */
    value: Array<ExpressRouteCircuitArpTable>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
