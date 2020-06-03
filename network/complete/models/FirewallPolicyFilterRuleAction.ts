import { FirewallPolicyFilterRuleActionType } from '../enums/FirewallPolicyFilterRuleActionType';

/**
 * @description Properties of the FirewallPolicyFilterRuleAction.
 * @since 2019-07-01
 */
export interface FirewallPolicyFilterRuleAction {
    /**
     * @description The type of action.
     */
    type: FirewallPolicyFilterRuleActionType | string;
}
