import { ProvisioningState } from '../enums/ProvisioningState';
import { ApplicationGatewayFirewallRuleGroup } from './ApplicationGatewayFirewallRuleGroup';
/**
 * @description Properties of the web application firewall rule set.
 */
export interface ApplicationGatewayFirewallRuleSetPropertiesFormat {
    /**
     * @description The provisioning state of the web application firewall rule set.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The type of the web application firewall rule set.
     */
    ruleSetType?: string;
    /**
     * @description The version of the web application firewall rule set type.
     */
    ruleSetVersion?: string;
    /**
     * @description The rule groups of the web application firewall rule set.
     */
    ruleGroups?: Array<ApplicationGatewayFirewallRuleGroup>;
}
