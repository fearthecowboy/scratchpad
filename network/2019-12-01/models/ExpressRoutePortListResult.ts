import { ExpressRoutePort } from './ExpressRoutePort';
/**
 * ExpressRoute Port List Result
 * @description Response for ListExpressRoutePorts API service call.
 */
export interface ExpressRoutePortListResult {
    /**
     * @description A list of ExpressRoutePort resources.
     */
    value: Array<ExpressRoutePort>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
