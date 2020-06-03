import { FirewallPolicy } from './FirewallPolicy';

/**
 * @description Response for ListFirewallPolicies API service call.
 * @since 2019-07-01
 */
export interface FirewallPolicyListResult {
    /**
     * @description List of Firewall Policies in a resource group.
     */
    value: Array<FirewallPolicy>;
    /**
     * @description URL to get the next set of results.
     */
    nextLink: string;
}
