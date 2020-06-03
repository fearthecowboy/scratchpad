import { ApplicationGatewayFirewallMode } from '../enums/ApplicationGatewayFirewallMode';
import { ApplicationGatewayFirewallDisabledRuleGroup } from './ApplicationGatewayFirewallDisabledRuleGroup';
/**
 * @description Application gateway web application firewall configuration.
 */
export interface ApplicationGatewayWebApplicationFirewallConfiguration {
    /**
     * @description Whether the web application firewall is enabled or not.
     */
    enabled?: boolean;
    /**
     * @description Web application firewall mode.
     */
    firewallMode?: ApplicationGatewayFirewallMode | string;
    /**
     * @description The type of the web application firewall rule set. Possible values are: 'OWASP'.
     */
    ruleSetType?: string;
    /**
     * @description The version of the rule set type.
     */
    ruleSetVersion?: string;
    /**
     * @description The disabled rule groups.
     */
    disabledRuleGroups: Array<ApplicationGatewayFirewallDisabledRuleGroup>;
}
