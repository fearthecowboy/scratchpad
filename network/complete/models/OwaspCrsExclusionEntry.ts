import { OwaspCrsExclusionEntryMatchVariable } from '../enums/OwaspCrsExclusionEntryMatchVariable';
import { OwaspCrsExclusionEntrySelectorMatchOperator } from '../enums/OwaspCrsExclusionEntrySelectorMatchOperator';

/**
 * @description Allow to exclude some variable satisfy the condition for the WAF check.
 * @since 2019-12-01
 */
export interface OwaspCrsExclusionEntry {
    /**
     * @description The variable to be excluded.
     */
    matchVariable?: OwaspCrsExclusionEntryMatchVariable | string;
    /**
     * @description When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to.
     */
    selectorMatchOperator?: OwaspCrsExclusionEntrySelectorMatchOperator | string;
    /**
     * @description When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to.
     */
    selector?: string;
}
