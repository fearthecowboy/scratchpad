import { AzureFirewallIPConfigurationPropertiesFormat } from './AzureFirewallIPConfigurationPropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description IP configuration of an Azure Firewall.
 * @since 2019-07-01
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
    /** @description Type of the resource.
     * @since 2019-12-01
     */
    readonly type: string;
}
