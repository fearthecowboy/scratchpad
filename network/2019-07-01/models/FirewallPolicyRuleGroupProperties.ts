import { FirewallPolicyRule } from './FirewallPolicyRule';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of the rule group.
 */
export interface FirewallPolicyRuleGroupProperties {
    /**
     * @description Priority of the Firewall Policy Rule Group resource.
     */
    priority: int32 & Minimum<100> & Maximum<65000>;
    /**
     * @description Group of Firewall Policy rules.
     */
    rules: Array<FirewallPolicyRule>;
    /**
     * @description The provisioning state of the firewall policy rule group resource.
     */
    provisioningState: ProvisioningState | string;
}
