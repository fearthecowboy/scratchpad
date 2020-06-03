import { ApplicationGatewayFirewallRuleSet } from './ApplicationGatewayFirewallRuleSet';
/**
 * @description Response for ApplicationGatewayAvailableWafRuleSets API service call.
 */
export interface ApplicationGatewayAvailableWafRuleSetsResult {
    /**
     * @description The list of application gateway rule sets.
     */
    value: Array<ApplicationGatewayFirewallRuleSet>;
}
