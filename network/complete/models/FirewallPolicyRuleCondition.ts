import { FirewallPolicyRuleConditionType } from '../enums/FirewallPolicyRuleConditionType';

/**
 * @description Properties of a rule.
 * @since 2019-07-01
 */
export interface FirewallPolicyRuleCondition {
    /**
     * @description Name of the rule condition.
     */
    name: string;
    /**
     * @description Description of the rule condition.
     */
    description: string;
    /**
     * @description Rule Condition Type.
     */
    ruleConditionType?: FirewallPolicyRuleConditionType | string;
}
