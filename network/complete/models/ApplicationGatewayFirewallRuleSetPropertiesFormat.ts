import { ProvisioningState } from "../enums/ProvisioningState";
import { ApplicationGatewayFirewallRuleGroup } from './ApplicationGatewayFirewallRuleGroup';

/**
 * @description Properties of the web application firewall rule set.
 * @since 2017-11-01
 */
export interface ApplicationGatewayFirewallRuleSetPropertiesFormat {
    /**
     * @description The provisioning state of the web application firewall rule set.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
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
