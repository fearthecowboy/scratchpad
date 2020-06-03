import { ExpressRouteCircuit } from './ExpressRouteCircuit';

/**
 * @description Response for ListExpressRouteCircuit API service call.
 */
export interface ExpressRouteCircuitListResult {
    /**
     * @description A list of ExpressRouteCircuits in a resource group.
     */
    value: Array<ExpressRouteCircuit>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
