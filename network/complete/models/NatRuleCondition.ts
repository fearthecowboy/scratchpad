import { FirewallPolicyRuleConditionNetworkProtocol } from '../enums/FirewallPolicyRuleConditionNetworkProtocol';
import { FirewallPolicyRuleCondition } from './FirewallPolicyRuleCondition';

/**
 * @description Rule condition of type nat.
 * @since 2019-12-01
 */
export interface NatRuleCondition extends FirewallPolicyRuleCondition {
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
    /** @description Terminate TLS connections for this rule.
     * @since 2020-04-01
     */
    terminateTLS: boolean;
}
