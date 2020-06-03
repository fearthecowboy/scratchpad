import { AzureFirewallNatRCAction } from './AzureFirewallNatRCAction';
import { AzureFirewallNatRule } from './AzureFirewallNatRule';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of the NAT rule collection.
 */
export interface AzureFirewallNatRuleCollectionProperties {
    /**
     * @description Priority of the NAT rule collection resource.
     */
    priority: int32 & Minimum<100> & Maximum<65000>;
    /**
     * @description The action type of a NAT rule collection.
     */
    action: AzureFirewallNatRCAction;
    /**
     * @description Collection of rules used by a NAT rule collection.
     */
    rules: Array<AzureFirewallNatRule>;
    /**
     * @description The provisioning state of the NAT rule collection resource.
     */
    provisioningState: ProvisioningState | string;
}
