import { FirewallPolicyRuleCondition } from './FirewallPolicyRuleCondition';
import { FirewallPolicyRuleConditionApplicationProtocol } from './FirewallPolicyRuleConditionApplicationProtocol';

/**
 * @description Rule condition of type application.
 * @since 2019-07-01
 */
export interface ApplicationRuleCondition extends FirewallPolicyRuleCondition {
    /**
     * @description List of source IP addresses for this rule.
     */
    sourceAddresses: Array<string>;
    /**
     * @description List of destination IP addresses or Service Tags.
     */
    destinationAddresses: Array<string>;
    /**
     * @description Array of Application Protocols.
     */
    protocols: Array<FirewallPolicyRuleConditionApplicationProtocol>;
    /**
     * @description List of FQDNs for this rule condition.
     */
    targetFqdns: Array<string>;
    /**
     * @description List of FQDN Tags for this rule condition.
     */
    fqdnTags: Array<string>;
    /** @description List of source IpGroups for this rule.
     * @since 2019-12-01
     */
    sourceIpGroups: Array<string>;
    /** @description List of Urls for this rule condition.
     * @since 2020-04-01
     */
    targetUrls: Array<string>;
}
