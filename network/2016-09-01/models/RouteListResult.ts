import { Route } from './Route';
/**
 * @description Response for the ListRoute API service call
 */
export interface RouteListResult {
    /**
     * @description Gets a list of routes in a resource group.
     */
    value: Array<Route>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
