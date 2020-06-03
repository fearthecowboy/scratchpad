import { HubRouteTable } from './HubRouteTable';
/**
 * @description List of RouteTables and a URL nextLink to get the next set of results.
 * @since 2020-04-01
 */
export interface ListHubRouteTablesResult {
    /**
     * @description List of RouteTables.
     */
    value: Array<HubRouteTable>;
    /**
     * @description URL to get the next set of operation list results if there are any.
     */
    nextLink: string;
}
