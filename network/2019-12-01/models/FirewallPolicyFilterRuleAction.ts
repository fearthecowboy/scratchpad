import { FirewallPolicyFilterRuleActionType } from '../enums/FirewallPolicyFilterRuleActionType';
/**
 * @description Properties of the FirewallPolicyFilterRuleAction.
 */
export interface FirewallPolicyFilterRuleAction {
    /**
     * @description The type of action.
     */
    type: FirewallPolicyFilterRuleActionType | string;
}
