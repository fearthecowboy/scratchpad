import { EndpointServiceResult } from './EndpointServiceResult';

/**
 * @description Response for the ListAvailableEndpointServices API service call.
 * @since 2017-11-01
 */
export interface EndpointServicesListResult {
    /**
     * @description List of available endpoint services in a region.
     */
    value: Array<EndpointServiceResult>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
