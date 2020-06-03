import { Resource } from './Resource';
import { ApplicationGatewayFirewallRuleSetPropertiesFormat } from './ApplicationGatewayFirewallRuleSetPropertiesFormat';
/**
 * @description A web application firewall rule set.
 */
export interface ApplicationGatewayFirewallRuleSet extends Resource {
    properties: ApplicationGatewayFirewallRuleSetPropertiesFormat;
}
