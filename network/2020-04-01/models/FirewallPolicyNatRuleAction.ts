import { FirewallPolicyNatRuleActionType } from '../enums/FirewallPolicyNatRuleActionType';
/**
 * @description Properties of the FirewallPolicyNatRuleAction.
 */
export interface FirewallPolicyNatRuleAction {
    /**
     * @description The type of action.
     */
    type: FirewallPolicyNatRuleActionType | string;
}
