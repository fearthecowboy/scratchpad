import { PrivateLinkService } from './PrivateLinkService';
/**
 * @description Response for the ListPrivateLinkService API service call.
 */
export interface PrivateLinkServiceListResult {
    /**
     * @description A list of PrivateLinkService resources in a resource group.
     */
    value: Array<PrivateLinkService>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
