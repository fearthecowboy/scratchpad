import { AzureFirewallRCActionType } from '../enums/AzureFirewallRCActionType';
/**
 * @description Properties of the AzureFirewallRCAction.
 */
export interface AzureFirewallRCAction {
    /**
     * @description The type of action.
     */
    type: AzureFirewallRCActionType | string;
}
