import { AzureFirewallSkuName } from '../enums/AzureFirewallSkuName';
import { AzureFirewallSkuTier } from '../enums/AzureFirewallSkuTier';

/**
 * @description SKU of an Azure Firewall.
 * @since 2019-12-01
 */
export interface AzureFirewallSku {
    /**
     * @description Name of an Azure Firewall SKU.
     */
    name: AzureFirewallSkuName | string;
    /**
     * @description Tier of an Azure Firewall.
     */
    tier: AzureFirewallSkuTier | string;
}
