import { ManagedRuleGroupOverride } from './ManagedRuleGroupOverride';

/**
 * @description Defines a managed rule set.
 * @since 2019-12-01
 */
export interface ManagedRuleSet {
    /**
     * @description Defines the rule set type to use.
     */
    ruleSetType?: string;
    /**
     * @description Defines the version of the rule set to use.
     */
    ruleSetVersion?: string;
    /**
     * @description Defines the rule group overrides to apply to the rule set.
     */
    ruleGroupOverrides: Array<ManagedRuleGroupOverride>;
}
