import { ExpressRouteCircuitRoutesTable } from './ExpressRouteCircuitRoutesTable';

/**
 * @description Response for ListRoutesTable associated with the Express Route Circuits API.
 */
export interface ExpressRouteCircuitsRoutesTableListResult {
    /**
     * @description The list of routes table.
     */
    value: Array<ExpressRouteCircuitRoutesTable>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
