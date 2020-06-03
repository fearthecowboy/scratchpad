import { ExpressRouteCircuitRoutesTableSummary } from './ExpressRouteCircuitRoutesTableSummary';
/**
 * @description Response for ListRoutesTable associated with the Express Route Circuits API.
 */
export interface ExpressRouteCircuitsRoutesTableSummaryListResult {
    /**
     * @description A list of the routes table.
     */
    value: Array<ExpressRouteCircuitRoutesTableSummary>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
