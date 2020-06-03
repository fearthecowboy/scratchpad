import { Resource } from './Resource';
import { ApplicationGatewayFirewallRuleSetPropertiesFormat } from './ApplicationGatewayFirewallRuleSetPropertiesFormat';
/**
 * @description A web application firewall rule set.
 */
export interface ApplicationGatewayFirewallRuleSet extends Resource {
    /**
     * @description Properties of the application gateway firewall rule set.
     */
    properties: ApplicationGatewayFirewallRuleSetPropertiesFormat;
}
