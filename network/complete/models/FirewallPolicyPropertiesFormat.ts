import { AzureFirewallThreatIntelMode } from '../enums/AzureFirewallThreatIntelMode';
import { FirewallPolicyIntrusionSystemMode } from "../enums/FirewallPolicyIntrusionSystemMode";
import { ProvisioningState } from '../enums/ProvisioningState';
import { FirewallPolicyThreatIntelWhitelist } from "./FirewallPolicyThreatIntelWhitelist";
import { FirewallPolicyTransportSecurity } from "./FirewallPolicyTransportSecurity";
import { SubResource } from './SubResource';

/**
 * @description Firewall Policy definition.
 * @since 2019-07-01
 */
export interface FirewallPolicyPropertiesFormat {
    /**
     * @description List of references to FirewallPolicyRuleGroups.
     */
    readonly ruleGroups: Array<SubResource>;
    /**
     * @description The provisioning state of the firewall policy resource.
     * @Readonly  '2019-12-01' - added readonly
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
    /** @description ThreatIntel Whitelist for Firewall Policy.
     * @since 2020-04-01
     */
    threatIntelWhitelist: FirewallPolicyThreatIntelWhitelist;
    /** @description The operation mode for Intrusion system.
     * @since 2020-04-01
     */
    intrusionSystemMode: FirewallPolicyIntrusionSystemMode | string;
    /** @description TLS Configuration definition.
     * @since 2020-04-01
     */
    transportSecurity: FirewallPolicyTransportSecurity;
}
