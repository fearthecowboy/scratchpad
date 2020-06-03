import { PrivateEndpoint } from './PrivateEndpoint';
/**
 * @description Response for the ListPrivateEndpoints API service call.
 */
export interface PrivateEndpointListResult {
    /**
     * @description A list of private endpoint resources in a resource group.
     */
    value: Array<PrivateEndpoint>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
