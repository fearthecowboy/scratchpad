import { ExpressRoutePortsLocation } from './ExpressRoutePortsLocation';
/**
 * ExpressRoutePorts Location List Result
 * @description Response for ListExpressRoutePortsLocations API service call.
 */
export interface ExpressRoutePortsLocationListResult {
    /**
     * @description The list of all ExpressRoutePort peering locations.
     */
    value: Array<ExpressRoutePortsLocation>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
