import { PublicIPAddress } from './PublicIPAddress';
/**
 * @description Response for ListPublicIpAddresses API service call.
 */
export interface PublicIPAddressListResult {
    /**
     * @description A list of public IP addresses that exists in a resource group.
     */
    value: Array<PublicIPAddress>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
