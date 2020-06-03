import { OwaspCrsExclusionEntry } from './OwaspCrsExclusionEntry';
import { ManagedRuleSet } from './ManagedRuleSet';
/**
 * @description Allow to exclude some variable satisfy the condition for the WAF check.
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
