
/**
 * @description Set of conditions in the Rewrite Rule in Application Gateway.
 * @since 2019-07-01
 */
export interface ApplicationGatewayRewriteRuleCondition {
    /**
     * @description The condition parameter of the RewriteRuleCondition.
     */
    variable: string;
    /**
     * @description The pattern, either fixed string or regular expression, that evaluates the truthfulness of the condition.
     */
    pattern: string;
    /**
     * @description Setting this paramter to truth value with force the pattern to do a case in-sensitive comparison.
     */
    ignoreCase: boolean;
    /**
     * @description Setting this value as truth will force to check the negation of the condition given by the user.
     */
    negate: boolean;
}
