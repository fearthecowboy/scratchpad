import { ApplicationGatewayFirewallRuleSetPropertiesFormat } from './ApplicationGatewayFirewallRuleSetPropertiesFormat';
import { Resource } from './Resource';

/**
 * @description A web application firewall rule set.
 * @since 2017-11-01
 */
export interface ApplicationGatewayFirewallRuleSet extends Resource {
    properties: ApplicationGatewayFirewallRuleSetPropertiesFormat;
}
