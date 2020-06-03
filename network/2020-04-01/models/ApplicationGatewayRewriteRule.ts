import { ApplicationGatewayRewriteRuleCondition } from './ApplicationGatewayRewriteRuleCondition';
import { ApplicationGatewayRewriteRuleActionSet } from './ApplicationGatewayRewriteRuleActionSet';
/**
 * @description Rewrite rule of an application gateway.
 */
export interface ApplicationGatewayRewriteRule {
    /**
     * @description Name of the rewrite rule that is unique within an Application Gateway.
     */
    name: string;
    /**
     * @description Rule Sequence of the rewrite rule that determines the order of execution of a particular rule in a RewriteRuleSet.
     */
    ruleSequence: int64;
    /**
     * @description Conditions based on which the action set execution will be evaluated.
     */
    conditions: Array<ApplicationGatewayRewriteRuleCondition>;
    /**
     * @description Set of actions to be done as part of the rewrite Rule.
     */
    actionSet: ApplicationGatewayRewriteRuleActionSet;
}
