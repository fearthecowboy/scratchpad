import { AzureFirewallRCActionType } from '../enums/AzureFirewallRCActionType';

/**
 * @description Properties of the AzureFirewallRCAction.
 * @since 2019-07-01
 */
export interface AzureFirewallRCAction {
    /**
     * @description The type of action.
     */
    type: AzureFirewallRCActionType | string;
}
