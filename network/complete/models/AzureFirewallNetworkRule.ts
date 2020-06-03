import { AzureFirewallNetworkRuleProtocol } from '../enums/AzureFirewallNetworkRuleProtocol';

/**
 * @description Properties of the network rule.
 * @since 2019-07-01
 */
export interface AzureFirewallNetworkRule {
    /**
     * @description Name of the network rule.
     */
    name: string;
    /**
     * @description Description of the rule.
     */
    description: string;
    /**
     * @description Array of AzureFirewallNetworkRuleProtocols.
     */
    protocols: Array<AzureFirewallNetworkRuleProtocol | string>;
    /**
     * @description List of source IP addresses for this rule.
     */
    sourceAddresses: Array<string>;
    /**
     * @description List of destination IP addresses.
     */
    destinationAddresses: Array<string>;
    /**
     * @description List of destination ports.
     */
    destinationPorts: Array<string>;
    /** @description List of destination FQDNs.
     * @since 2019-12-01
     */
    destinationFqdns: Array<string>;
    /** @description List of source IpGroups for this rule.
     * @since 2019-12-01
     */
    sourceIpGroups: Array<string>;
    /** @description List of destination IpGroups for this rule.
     * @since 2019-12-01
     */
    destinationIpGroups: Array<string>;
}
