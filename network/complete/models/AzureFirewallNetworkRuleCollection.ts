import { AzureFirewallNetworkRuleCollectionPropertiesFormat } from './AzureFirewallNetworkRuleCollectionPropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description Network rule collection resource.
 * @since 2019-07-01
 */
export interface AzureFirewallNetworkRuleCollection extends SubResource {
    /**
     * @description Properties of the azure firewall network rule collection.
     */
    properties: AzureFirewallNetworkRuleCollectionPropertiesFormat;
    /**
     * @description The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
