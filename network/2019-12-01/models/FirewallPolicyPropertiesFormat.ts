import { SubResource } from './SubResource';
import { ProvisioningState } from '../enums/ProvisioningState';
import { AzureFirewallThreatIntelMode } from '../enums/AzureFirewallThreatIntelMode';
/**
 * @description Firewall Policy definition.
 */
export interface FirewallPolicyPropertiesFormat {
    /**
     * @description List of references to FirewallPolicyRuleGroups.
     */
    readonly ruleGroups: Array<SubResource>;
    /**
     * @description The provisioning state of the firewall policy resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The parent firewall policy from which rules are inherited.
     */
    basePolicy: SubResource;
    /**
     * @description List of references to Azure Firewalls that this Firewall Policy is associated with.
     */
    readonly firewalls: Array<SubResource>;
    /**
     * @description List of references to Child Firewall Policies.
     */
    readonly childPolicies: Array<SubResource>;
    /**
     * @description The operation mode for Threat Intelligence.
     */
    threatIntelMode: AzureFirewallThreatIntelMode | string;
}
