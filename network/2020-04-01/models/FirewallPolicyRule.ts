import { FirewallPolicyRuleType } from '../enums/FirewallPolicyRuleType';
/**
 * @description Properties of the rule.
 */
export interface FirewallPolicyRule {
    /**
     * @description The type of the rule.
     */
    ruleType?: FirewallPolicyRuleType | string;
    /**
     * @description The name of the rule.
     */
    name: string;
    /**
     * @description Priority of the Firewall Policy Rule resource.
     */
    priority: int32 & Minimum<100> & Maximum<65000>;
}
