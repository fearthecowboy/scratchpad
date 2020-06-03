import { PolicySettings } from './PolicySettings';
import { WebApplicationFirewallCustomRule } from './WebApplicationFirewallCustomRule';
import { ApplicationGateway } from './ApplicationGateway';
import { ProvisioningState } from '../enums/ProvisioningState';
import { WebApplicationFirewallPolicyResourceState } from '../enums/WebApplicationFirewallPolicyResourceState';
/**
 * @description Defines web application firewall policy properties.
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
}
