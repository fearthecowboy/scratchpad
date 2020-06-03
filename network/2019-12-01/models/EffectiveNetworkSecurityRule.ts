import { EffectiveSecurityRuleProtocol } from '../enums/EffectiveSecurityRuleProtocol';
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
     * @description The network protocol this rule applies to.
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
     * @description The source port ranges. Expected values include a single integer between 0 and 65535, a range using '-' as separator (e.g. 100-400), or an asterisk (*).
     */
    sourcePortRanges: Array<string>;
    /**
     * @description The destination port ranges. Expected values include a single integer between 0 and 65535, a range using '-' as separator (e.g. 100-400), or an asterisk (*).
     */
    destinationPortRanges: Array<string>;
    /**
     * @description The source address prefix.
     */
    sourceAddressPrefix: string;
    /**
     * @description The destination address prefix.
     */
    destinationAddressPrefix: string;
    /**
     * @description The source address prefixes. Expected values include CIDR IP ranges, Default Tags (VirtualNetwork, AzureLoadBalancer, Internet), System Tags, and the asterisk (*).
     */
    sourceAddressPrefixes: Array<string>;
    /**
     * @description The destination address prefixes. Expected values include CIDR IP ranges, Default Tags (VirtualNetwork, AzureLoadBalancer, Internet), System Tags, and the asterisk (*).
     */
    destinationAddressPrefixes: Array<string>;
    /**
     * @description The expanded source address prefix.
     */
    expandedSourceAddressPrefix: Array<string>;
    /**
     * @description Expanded destination address prefix.
     */
    expandedDestinationAddressPrefix: Array<string>;
    /**
     * @description Whether network traffic is allowed or denied.
     */
    access: SecurityRuleAccess | string;
    /**
     * @description The priority of the rule.
     */
    priority: int32;
    /**
     * @description The direction of the rule.
     */
    direction: SecurityRuleDirection | string;
}
