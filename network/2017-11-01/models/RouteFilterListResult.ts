import { RouteFilter } from './RouteFilter';
/**
 * @description Response for the ListRouteFilters API service call.
 */
export interface RouteFilterListResult {
    /**
     * @description Gets a list of route filters in a resource group.
     */
    value: Array<RouteFilter>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
