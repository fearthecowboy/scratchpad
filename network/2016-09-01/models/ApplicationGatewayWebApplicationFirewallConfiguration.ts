import { ApplicationGatewayFirewallMode } from '../enums/ApplicationGatewayFirewallMode';
/**
 * @description Application gateway web application firewall configuration.
 */
export interface ApplicationGatewayWebApplicationFirewallConfiguration {
    /**
     * @description Whether the web application firewall is enabled.
     */
    enabled?: boolean;
    /**
     * @description Web application firewall mode. Possible values are: 'Detection' and 'Prevention'.
     */
    firewallMode: ApplicationGatewayFirewallMode | string;
}
