import { SubResource } from './SubResource';
import { AzureFirewallNetworkRuleCollectionPropertiesFormat } from './AzureFirewallNetworkRuleCollectionPropertiesFormat';
/**
 * @description Network rule collection resource.
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
