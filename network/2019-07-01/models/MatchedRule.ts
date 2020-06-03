
/**
 * @description Matched rule.
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
