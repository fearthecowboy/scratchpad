import { ManagedRuleOverride } from './ManagedRuleOverride';

/**
 * @description Defines a managed rule group override setting.
 * @since 2019-12-01
 */
export interface ManagedRuleGroupOverride {
    /**
     * @description The managed rule group to override.
     */
    ruleGroupName?: string;
    /**
     * @description List of rules that will be disabled. If none specified, all rules in the group will be disabled.
     */
    rules: Array<ManagedRuleOverride>;
}
