import { AzureFirewall } from './AzureFirewall';

/**
 * @description Response for ListAzureFirewalls API service call.
 * @since 2019-07-01
 */
export interface AzureFirewallListResult {
    /**
     * @description List of Azure Firewalls in a resource group.
     */
    value: Array<AzureFirewall>;
    /**
     * @description URL to get the next set of results.
     */
    nextLink: string;
}
