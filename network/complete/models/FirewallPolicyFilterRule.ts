import { FirewallPolicyFilterRuleAction } from './FirewallPolicyFilterRuleAction';
import { FirewallPolicyRule } from './FirewallPolicyRule';
import { FirewallPolicyRuleCondition } from './FirewallPolicyRuleCondition';

/**
 * @description Firewall Policy Filter Rule.
 * @since 2019-07-01
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
