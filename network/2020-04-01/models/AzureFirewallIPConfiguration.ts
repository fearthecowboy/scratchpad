import { SubResource } from './SubResource';
import { AzureFirewallIPConfigurationPropertiesFormat } from './AzureFirewallIPConfigurationPropertiesFormat';
/**
 * @description IP configuration of an Azure Firewall.
 */
export interface AzureFirewallIPConfiguration extends SubResource {
    /**
     * @description Properties of the azure firewall IP configuration.
     */
    properties: AzureFirewallIPConfigurationPropertiesFormat;
    /**
     * @description Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Type of the resource.
     */
    readonly type: string ;
}
