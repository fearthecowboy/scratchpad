import { AzureFirewallRCAction } from './AzureFirewallRCAction';
import { AzureFirewallNetworkRule } from './AzureFirewallNetworkRule';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of the network rule collection.
 */
export interface AzureFirewallNetworkRuleCollectionPropertiesFormat {
    /**
     * @description Priority of the network rule collection resource.
     */
    priority: int32 & Minimum<100> & Maximum<65000>;
    /**
     * @description The action type of a rule collection.
     */
    action: AzureFirewallRCAction;
    /**
     * @description Collection of rules used by a network rule collection.
     */
    rules: Array<AzureFirewallNetworkRule>;
    /**
     * @description The provisioning state of the network rule collection resource.
     */
    provisioningState: ProvisioningState | string;
}
