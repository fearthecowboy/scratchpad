
/**
 * @extensible
 * @description Rule Condition Type.
 * @since 2019-07-01
 */
export enum FirewallPolicyRuleConditionType {
    /**
     *
     */
    ApplicationRuleCondition = 'ApplicationRuleCondition',
    /**
     *
     */
    NetworkRuleCondition = 'NetworkRuleCondition',
    /**
     * @since 2019-12-01
     */
    NatRuleCondition = "NatRuleCondition"
}
