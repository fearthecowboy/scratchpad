import { RouteTable } from './RouteTable';
/**
 * @description Response for the ListRouteTable API service call.
 */
export interface RouteTableListResult {
    /**
     * @description Gets a list of route tables in a resource group.
     */
    value: Array<RouteTable>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
