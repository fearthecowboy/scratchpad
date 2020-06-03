import { AzureFirewallApplicationRuleProtocolType } from '../enums/AzureFirewallApplicationRuleProtocolType';
/**
 * @description Properties of the application rule protocol.
 */
export interface AzureFirewallApplicationRuleProtocol {
    /**
     * @description Protocol type.
     */
    protocolType: AzureFirewallApplicationRuleProtocolType | string;
    /**
     * @description Port number for the protocol, cannot be greater than 64000. This field is optional.
     */
    port: int32 & Minimum<0> & Maximum<64000>;
}
