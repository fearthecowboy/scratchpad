import { AzureFirewallApplicationRuleProtocol } from './AzureFirewallApplicationRuleProtocol';
/**
 * @description Properties of an application rule.
 */
export interface AzureFirewallApplicationRule {
    /**
     * @description Name of the application rule.
     */
    name: string;
    /**
     * @description Description of the rule.
     */
    description: string;
    /**
     * @description List of source IP addresses for this rule.
     */
    sourceAddresses: Array<string>;
    /**
     * @description Array of ApplicationRuleProtocols.
     */
    protocols: Array<AzureFirewallApplicationRuleProtocol>;
    /**
     * @description List of FQDNs for this rule.
     */
    targetFqdns: Array<string>;
    /**
     * @description List of FQDN Tags for this rule.
     */
    fqdnTags: Array<string>;
}
