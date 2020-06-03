
/**
 * @extensible
 * @description When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to.
 */
export enum OwaspCrsExclusionEntrySelectorMatchOperator {
    /**
     *
     */
    Equals = 'Equals',
    /**
     *
     */
    Contains = 'Contains',
    /**
     *
     */
    StartsWith = 'StartsWith',
    /**
     *
     */
    EndsWith = 'EndsWith',
    /**
     *
     */
    EqualsAny = 'EqualsAny'
}
