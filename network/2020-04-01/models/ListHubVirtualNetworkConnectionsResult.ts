import { HubVirtualNetworkConnection } from './HubVirtualNetworkConnection';
/**
 * @description List of HubVirtualNetworkConnections and a URL nextLink to get the next set of results.
 */
export interface ListHubVirtualNetworkConnectionsResult {
    /**
     * @description List of HubVirtualNetworkConnections.
     */
    value: Array<HubVirtualNetworkConnection>;
    /**
     * @description URL to get the next set of operation list results if there are any.
     */
    nextLink: string;
}
