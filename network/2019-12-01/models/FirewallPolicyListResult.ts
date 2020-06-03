import { FirewallPolicy } from './FirewallPolicy';
/**
 * @description Response for ListFirewallPolicies API service call.
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
