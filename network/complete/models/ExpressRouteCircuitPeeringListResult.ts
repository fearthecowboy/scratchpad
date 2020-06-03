import { ExpressRouteCircuitPeering } from './ExpressRouteCircuitPeering';

/**
 * @description Response for ListPeering API service call retrieves all peerings that belong to an ExpressRouteCircuit.
 */
export interface ExpressRouteCircuitPeeringListResult {
    /**
     * @description The peerings in an express route circuit.
     */
    value: Array<ExpressRouteCircuitPeering>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
