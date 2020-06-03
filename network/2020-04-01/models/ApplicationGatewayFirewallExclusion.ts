
/**
 * @description Allow to exclude some variable satisfy the condition for the WAF check.
 */
export interface ApplicationGatewayFirewallExclusion {
    /**
     * @description The variable to be excluded.
     */
    matchVariable?: string;
    /**
     * @description When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to.
     */
    selectorMatchOperator?: string;
    /**
     * @description When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to.
     */
    selector?: string;
}
