
/**
 * @description Allows to disable rules within a rule group or an entire rule group.
 * @since 2017-11-01
 */
export interface ApplicationGatewayFirewallDisabledRuleGroup {
    /**
     * @description The name of the rule group that will be disabled.
     */
    ruleGroupName?: string;
    /**
     * @description The list of rules that will be disabled. If null, all rules of the rule group will be disabled.
     */
    rules: Array<int32>;
}
