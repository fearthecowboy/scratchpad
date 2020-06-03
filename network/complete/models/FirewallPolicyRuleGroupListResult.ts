import { FirewallPolicyRuleGroup } from './FirewallPolicyRuleGroup';

/**
 * @description Response for ListFirewallPolicyRuleGroups API service call.
 * @since 2019-07-01
 */
export interface FirewallPolicyRuleGroupListResult {
    /**
     * @description List of FirewallPolicyRuleGroups in a FirewallPolicy.
     */
    value: Array<FirewallPolicyRuleGroup>;
    /**
     * @description URL to get the next set of results.
     */
    nextLink: string;
}
