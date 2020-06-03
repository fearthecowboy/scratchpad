import { ExpressRouteCircuitConnection } from './ExpressRouteCircuitConnection';

/**
 * @description Response for ListConnections API service call retrieves all global reach connections that belongs to a Private Peering for an ExpressRouteCircuit.
 * @since 2019-07-01
 */
export interface ExpressRouteCircuitConnectionListResult {
    /**
     * @description The global reach connection associated with Private Peering in an ExpressRoute Circuit.
     */
    value: Array<ExpressRouteCircuitConnection>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
