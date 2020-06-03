import { PeerExpressRouteCircuitConnection } from './PeerExpressRouteCircuitConnection';

/**
 * @description Response for ListPeeredConnections API service call retrieves all global reach peer circuit connections that belongs to a Private Peering for an ExpressRouteCircuit.
 * @since 2019-07-01
 */
export interface PeerExpressRouteCircuitConnectionListResult {
    /**
     * @description The global reach peer circuit connection associated with Private Peering in an ExpressRoute Circuit.
     */
    value: Array<PeerExpressRouteCircuitConnection>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
