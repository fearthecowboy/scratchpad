import { AzureFirewallFqdnTag } from './AzureFirewallFqdnTag';

/**
 * @description Response for ListAzureFirewallFqdnTags API service call.
 * @since 2019-07-01
 */
export interface AzureFirewallFqdnTagListResult {
    /**
     * @description List of Azure Firewall FQDN Tags in a resource group.
     */
    value: Array<AzureFirewallFqdnTag>;
    /**
     * @description URL to get the next set of results.
     */
    nextLink: string;
}
