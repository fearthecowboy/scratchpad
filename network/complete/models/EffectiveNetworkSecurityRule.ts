import { EffectiveSecurityRuleProtocol } from "../enums/EffectiveSecurityRuleProtocol";
import { SecurityRuleAccess } from '../enums/SecurityRuleAccess';
import { SecurityRuleDirection } from '../enums/SecurityRuleDirection';

/**
 * @description Effective network security rules.
 */
export interface EffectiveNetworkSecurityRule {
    /**
     * @description The name of the security rule specified by the user (if created by the user).
     */
    name: string;
    /**
     * @description The network protocol this rule applies to. Possible values are: 'Tcp', 'Udp', and '*'.
     * @Type  '2017-11-01' - type changed from 'SecurityRuleProtocol | string' to 'EffectiveSecurityRuleProtocol | string'
     */
    protocol: EffectiveSecurityRuleProtocol | string;
    /**
     * @description The source port or range.
     */
    sourcePortRange: string;
    /**
     * @description The destination port or range.
     */
    destinationPortRange: string;
    /**
     * @description The source address prefix.
     */
    sourceAddressPrefix: string;
    /**
     * @description The destination address prefix.
     */
    destinationAddressPrefix: string;
    /**
     * @description The expanded source address prefix.
     */
    expandedSourceAddressPrefix: Array<string>;
    /**
     * @description Expanded destination address prefix.
     */
    expandedDestinationAddressPrefix: Array<string>;
    /**
     * @description Whether network traffic is allowed or denied. Possible values are: 'Allow' and 'Deny'.
     */
    access: SecurityRuleAccess | string;
    /**
     * @description The priority of the rule.
     */
    priority: int32;
    /**
     * @description The direction of the rule. Possible values are: 'Inbound and Outbound'.
     */
    direction: SecurityRuleDirection | string;
    /** @description The source port ranges. Expected values include a single integer between 0 and 65535, a range using '-' as separator (e.g. 100-400), or an asterisk (*)
     * @since 2017-11-01
     */
    sourcePortRanges: Array<string>;
    /** @description The destination port ranges. Expected values include a single integer between 0 and 65535, a range using '-' as separator (e.g. 100-400), or an asterisk (*)
     * @since 2017-11-01
     */
    destinationPortRanges: Array<string>;
    /** @description The source address prefixes. Expected values include CIDR IP ranges, Default Tags (VirtualNetwork, AzureLoadBalancer, Internet), System Tags, and the asterisk (*).
     * @since 2017-11-01
     */
    sourceAddressPrefixes: Array<string>;
    /** @description The destination address prefixes. Expected values include CIDR IP ranges, Default Tags (VirtualNetwork, AzureLoadBalancer, Internet), System Tags, and the asterisk (*).
     * @since 2017-11-01
     */
    destinationAddressPrefixes: Array<string>;
}
