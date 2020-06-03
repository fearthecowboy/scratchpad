
/**
 * @extensible
 * @description The operator to be matched.
 */
export enum WebApplicationFirewallOperator {
    /**
     *
     */
    IPMatch = 'IPMatch',
    /**
     *
     */
    Equal = 'Equal',
    /**
     *
     */
    Contains = 'Contains',
    /**
     *
     */
    LessThan = 'LessThan',
    /**
     *
     */
    GreaterThan = 'GreaterThan',
    /**
     *
     */
    LessThanOrEqual = 'LessThanOrEqual',
    /**
     *
     */
    GreaterThanOrEqual = 'GreaterThanOrEqual',
    /**
     *
     */
    BeginsWith = 'BeginsWith',
    /**
     *
     */
    EndsWith = 'EndsWith',
    /**
     *
     */
    Regex = 'Regex',
    /**
     *
     */
    GeoMatch = 'GeoMatch'
}
