import { NetworkProfile } from './NetworkProfile';
/**
 * @description Response for ListNetworkProfiles API service call.
 */
export interface NetworkProfileListResult {
    /**
     * @description A list of network profiles that exist in a resource group.
     */
    value: Array<NetworkProfile>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
