import { FirewallPolicyRuleConditionNetworkProtocol } from '../enums/FirewallPolicyRuleConditionNetworkProtocol';
import { FirewallPolicyRuleCondition } from './FirewallPolicyRuleCondition';

/**
 * @description Rule condition of type network.
 * @since 2019-07-01
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
    /** @description List of source IpGroups for this rule.
     * @since 2019-12-01
     */
    sourceIpGroups: Array<string>;
    /** @description List of destination IpGroups for this rule.
     * @since 2019-12-01
     */
    destinationIpGroups: Array<string>;
}
