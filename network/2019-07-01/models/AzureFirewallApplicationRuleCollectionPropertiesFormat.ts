import { AzureFirewallRCAction } from './AzureFirewallRCAction';
import { AzureFirewallApplicationRule } from './AzureFirewallApplicationRule';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of the application rule collection.
 */
export interface AzureFirewallApplicationRuleCollectionPropertiesFormat {
    /**
     * @description Priority of the application rule collection resource.
     */
    priority: int32 & Minimum<100> & Maximum<65000>;
    /**
     * @description The action type of a rule collection.
     */
    action: AzureFirewallRCAction;
    /**
     * @description Collection of rules used by a application rule collection.
     */
    rules: Array<AzureFirewallApplicationRule>;
    /**
     * @description The provisioning state of the application rule collection resource.
     */
    provisioningState: ProvisioningState | string;
}
