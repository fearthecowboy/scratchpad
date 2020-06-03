
/**
 * @extensible
 * @description Describes operator to be matched.
 * @since 2019-07-01
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
     * @since 2019-12-01
     */
    GeoMatch = "GeoMatch"
}
