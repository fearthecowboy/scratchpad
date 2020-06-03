import { FirewallPolicyRule } from './FirewallPolicyRule';
import { FirewallPolicyNatRuleAction } from './FirewallPolicyNatRuleAction';
import { FirewallPolicyRuleCondition } from './FirewallPolicyRuleCondition';
/**
 * @description Firewall Policy NAT Rule.
 */
export interface FirewallPolicyNatRule extends FirewallPolicyRule {
    /**
     * @description The action type of a Nat rule.
     */
    action: FirewallPolicyNatRuleAction;
    /**
     * @description The translated address for this NAT rule.
     */
    translatedAddress: string;
    /**
     * @description The translated port for this NAT rule.
     */
    translatedPort: string;
    /**
     * @description The match conditions for incoming traffic.
     */
    ruleCondition: FirewallPolicyRuleCondition;
}
