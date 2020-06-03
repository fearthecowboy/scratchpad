import { ManagedRuleEnabledState } from '../enums/ManagedRuleEnabledState';

/**
 * @description Defines a managed rule group override setting.
 * @since 2019-12-01
 */
export interface ManagedRuleOverride {
    /**
     * @description Identifier for the managed rule.
     */
    ruleId?: string;
    /**
     * @description The state of the managed rule. Defaults to Disabled if not specified.
     */
    state: ManagedRuleEnabledState | string;
}
