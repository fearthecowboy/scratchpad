import { ProvisioningState } from '../enums/ProvisioningState';
import { WebApplicationFirewallPolicyResourceState } from '../enums/WebApplicationFirewallPolicyResourceState';
import { ApplicationGateway } from './ApplicationGateway';
import { ManagedRulesDefinition } from "./ManagedRulesDefinition";
import { PolicySettings } from './PolicySettings';
import { SubResource } from "./SubResource";
import { WebApplicationFirewallCustomRule } from './WebApplicationFirewallCustomRule';

/**
 * @description Defines web application firewall policy properties.
 * @since 2019-07-01
 */
export interface WebApplicationFirewallPolicyPropertiesFormat {
    /**
     * @description Describes policySettings for policy.
     */
    policySettings: PolicySettings;
    /**
     * @description Describes custom rules inside the policy.
     */
    customRules: Array<WebApplicationFirewallCustomRule>;
    /**
     * @description A collection of references to application gateways.
     */
    readonly applicationGateways: Array<ApplicationGateway>;
    /**
     * @description The provisioning state of the web application firewall policy resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description Resource status of the policy.
     */
    readonly resourceState: WebApplicationFirewallPolicyResourceState | string;
    /** @description Describes the managedRules structure.
     * @since 2019-12-01
     */
    managedRules?: ManagedRulesDefinition;
    /** @description A collection of references to application gateway http listeners.
     * @since 2019-12-01
     */
    readonly httpListeners: Array<SubResource>;
    /** @description A collection of references to application gateway path rules.
     * @since 2019-12-01
     */
    readonly pathBasedRules: Array<SubResource>;
}
