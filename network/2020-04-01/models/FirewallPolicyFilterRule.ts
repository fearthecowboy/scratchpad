import { FirewallPolicyRule } from './FirewallPolicyRule';
import { FirewallPolicyFilterRuleAction } from './FirewallPolicyFilterRuleAction';
import { FirewallPolicyRuleCondition } from './FirewallPolicyRuleCondition';
/**
 * @description Firewall Policy Filter Rule.
 */
export interface FirewallPolicyFilterRule extends FirewallPolicyRule {
    /**
     * @description The action type of a Filter rule.
     */
    action: FirewallPolicyFilterRuleAction;
    /**
     * @description Collection of rule conditions used by a rule.
     */
    ruleConditions: Array<FirewallPolicyRuleCondition>;
}
