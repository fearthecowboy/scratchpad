import { ApplicationGatewayFirewallRuleSet } from './ApplicationGatewayFirewallRuleSet';

/**
 * @description Response for ApplicationGatewayAvailableWafRuleSets API service call.
 * @since 2017-11-01
 */
export interface ApplicationGatewayAvailableWafRuleSetsResult {
    /**
     * @description The list of application gateway rule sets.
     */
    value: Array<ApplicationGatewayFirewallRuleSet>;
}
