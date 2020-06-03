
/**
 * @description Matched rule.
 * @since 2019-07-01
 */
export interface MatchedRule {
    /**
     * @description Name of the matched network security rule.
     */
    ruleName: string;
    /**
     * @description The network traffic is allowed or denied. Possible values are 'Allow' and 'Deny'.
     */
    action: string;
}
