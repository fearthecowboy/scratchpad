import { FirewallPolicyRuleConditionApplicationProtocolType } from '../enums/FirewallPolicyRuleConditionApplicationProtocolType';

/**
 * @description Properties of the application rule protocol.
 * @since 2019-07-01
 */
export interface FirewallPolicyRuleConditionApplicationProtocol {
    /**
     * @description Protocol type.
     */
    protocolType: FirewallPolicyRuleConditionApplicationProtocolType | string;
    /**
     * @description Port number for the protocol, cannot be greater than 64000.
     */
    port: int32 & Minimum<0> & Maximum<64000>;
}
