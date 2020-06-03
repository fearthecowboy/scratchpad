import { ManagedRuleSet } from './ManagedRuleSet';
import { OwaspCrsExclusionEntry } from './OwaspCrsExclusionEntry';

/**
 * @description Allow to exclude some variable satisfy the condition for the WAF check.
 * @since 2019-12-01
 */
export interface ManagedRulesDefinition {
    /**
     * @description The Exclusions that are applied on the policy.
     */
    exclusions: Array<OwaspCrsExclusionEntry>;
    /**
     * @description The managed rule sets that are associated with the policy.
     */
    managedRuleSets?: Array<ManagedRuleSet>;
}
