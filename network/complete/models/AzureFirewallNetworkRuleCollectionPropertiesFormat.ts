import { ProvisioningState } from '../enums/ProvisioningState';
import { AzureFirewallNetworkRule } from './AzureFirewallNetworkRule';
import { AzureFirewallRCAction } from './AzureFirewallRCAction';

/**
 * @description Properties of the network rule collection.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
