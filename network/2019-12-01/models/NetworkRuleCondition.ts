import { FirewallPolicyRuleCondition } from './FirewallPolicyRuleCondition';
import { FirewallPolicyRuleConditionNetworkProtocol } from '../enums/FirewallPolicyRuleConditionNetworkProtocol';
/**
 * @description Rule condition of type network.
 */
export interface NetworkRuleCondition extends FirewallPolicyRuleCondition {
    /**
     * @description Array of FirewallPolicyRuleConditionNetworkProtocols.
     */
    ipProtocols: Array<FirewallPolicyRuleConditionNetworkProtocol | string>;
    /**
     * @description List of source IP addresses for this rule.
     */
    sourceAddresses: Array<string>;
    /**
     * @description List of destination IP addresses or Service Tags.
     */
    destinationAddresses: Array<string>;
    /**
     * @description List of destination ports.
     */
    destinationPorts: Array<string>;
    /**
     * @description List of source IpGroups for this rule.
     */
    sourceIpGroups: Array<string>;
    /**
     * @description List of destination IpGroups for this rule.
     */
    destinationIpGroups: Array<string>;
}
