import { ProvisioningState } from '../enums/ProvisioningState';
import { FirewallPolicyRule } from './FirewallPolicyRule';

/**
 * @description Properties of the rule group.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
