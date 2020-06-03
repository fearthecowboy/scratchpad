import { ExpressRouteCircuitAuthorization } from './ExpressRouteCircuitAuthorization';

/**
 * @description Response for ListAuthorizations API service call retrieves all authorizations that belongs to an ExpressRouteCircuit.
 */
export interface AuthorizationListResult {
    /**
     * @description The authorizations in an ExpressRoute Circuit.
     */
    value: Array<ExpressRouteCircuitAuthorization>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
