import { ProvisioningState } from '../enums/ProvisioningState';
import { AzureFirewallApplicationRule } from './AzureFirewallApplicationRule';
import { AzureFirewallRCAction } from './AzureFirewallRCAction';

/**
 * @description Properties of the application rule collection.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
