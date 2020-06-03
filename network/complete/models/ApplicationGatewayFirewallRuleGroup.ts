import { ApplicationGatewayFirewallRule } from './ApplicationGatewayFirewallRule';

/**
 * @description A web application firewall rule group.
 * @since 2017-11-01
 */
export interface ApplicationGatewayFirewallRuleGroup {
    /**
     * @description The name of the web application firewall rule group.
     */
    ruleGroupName?: string;
    /**
     * @description The description of the web application firewall rule group.
     */
    description: string;
    /**
     * @description The rules of the web application firewall rule group.
     */
    rules?: Array<ApplicationGatewayFirewallRule>;
}
