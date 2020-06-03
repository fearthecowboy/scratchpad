import { WebApplicationFirewallPolicy } from './WebApplicationFirewallPolicy';
/**
 * @description Result of the request to list WebApplicationFirewallPolicies. It contains a list of WebApplicationFirewallPolicy objects and a URL link to get the next set of results.
 */
export interface WebApplicationFirewallPolicyListResult {
    /**
     * @description List of WebApplicationFirewallPolicies within a resource group.
     */
    readonly value: Array<WebApplicationFirewallPolicy>;
    /**
     * @description URL to get the next set of WebApplicationFirewallPolicy objects if there are any.
     */
    readonly nextLink: string ;
}
