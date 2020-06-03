import { SecurityRuleProtocol } from '../enums/SecurityRuleProtocol';
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
     */
    protocol: SecurityRuleProtocol | string;
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
}
