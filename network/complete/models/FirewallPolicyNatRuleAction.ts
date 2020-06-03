import { FirewallPolicyNatRuleActionType } from '../enums/FirewallPolicyNatRuleActionType';

/**
 * @description Properties of the FirewallPolicyNatRuleAction.
 * @since 2019-07-01
 */
export interface FirewallPolicyNatRuleAction {
    /**
     * @description The type of action.
     */
    type: FirewallPolicyNatRuleActionType | string;
}
