import { AzureFirewallNatRCActionType } from '../enums/AzureFirewallNatRCActionType';
/**
 * @description AzureFirewall NAT Rule Collection Action.
 */
export interface AzureFirewallNatRCAction {
    /**
     * @description The type of action.
     */
    type: AzureFirewallNatRCActionType | string;
}
