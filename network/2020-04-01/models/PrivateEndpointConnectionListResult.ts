import { PrivateEndpointConnection } from './PrivateEndpointConnection';
/**
 * @description Response for the ListPrivateEndpointConnection API service call.
 */
export interface PrivateEndpointConnectionListResult {
    /**
     * @description A list of PrivateEndpointConnection resources for a specific private link service.
     */
    value: Array<PrivateEndpointConnection>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
