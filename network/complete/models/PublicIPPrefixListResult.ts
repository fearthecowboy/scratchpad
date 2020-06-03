import { PublicIPPrefix } from './PublicIPPrefix';

/**
 * @description Response for ListPublicIpPrefixes API service call.
 * @since 2019-07-01
 */
export interface PublicIPPrefixListResult {
    /**
     * @description A list of public IP prefixes that exists in a resource group.
     */
    value: Array<PublicIPPrefix>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
