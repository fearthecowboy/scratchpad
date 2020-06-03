import { BastionHost } from './BastionHost';
/**
 * @description Response for ListBastionHosts API service call.
 */
export interface BastionHostListResult {
    /**
     * @description List of Bastion Hosts in a resource group.
     */
    value: Array<BastionHost>;
    /**
     * @description URL to get the next set of results.
     */
    nextLink: string;
}
