import { AzureFirewallNatRCActionType } from '../enums/AzureFirewallNatRCActionType';

/**
 * @description AzureFirewall NAT Rule Collection Action.
 * @since 2019-07-01
 */
export interface AzureFirewallNatRCAction {
    /**
     * @description The type of action.
     */
    type: AzureFirewallNatRCActionType | string;
}
