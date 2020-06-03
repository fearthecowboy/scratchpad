import { AzureFirewallNetworkRuleProtocol } from '../enums/AzureFirewallNetworkRuleProtocol';
/**
 * @description Properties of a NAT rule.
 */
export interface AzureFirewallNatRule {
    /**
     * @description Name of the NAT rule.
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
     * @description List of destination IP addresses for this rule. Supports IP ranges, prefixes, and service tags.
     */
    destinationAddresses: Array<string>;
    /**
     * @description List of destination ports.
     */
    destinationPorts: Array<string>;
    /**
     * @description Array of AzureFirewallNetworkRuleProtocols applicable to this NAT rule.
     */
    protocols: Array<AzureFirewallNetworkRuleProtocol | string>;
    /**
     * @description The translated address for this NAT rule.
     */
    translatedAddress: string;
    /**
     * @description The translated port for this NAT rule.
     */
    translatedPort: string;
    /**
     * @description The translated FQDN for this NAT rule.
     */
    translatedFqdn: string;
    /**
     * @description List of source IpGroups for this rule.
     */
    sourceIpGroups: Array<string>;
}
