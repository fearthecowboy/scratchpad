import { PrivateLinkService } from './PrivateLinkService';

/**
 * @description Response for the ListPrivateLinkService API service call.
 * @since 2019-07-01
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
