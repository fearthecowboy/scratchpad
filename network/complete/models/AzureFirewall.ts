import { AzureFirewallPropertiesFormat } from './AzureFirewallPropertiesFormat';
import { Resource } from './Resource';

/**
 * @description Azure Firewall resource.
 * @since 2019-07-01
 */
export interface AzureFirewall extends Resource {
    /**
     * @description Properties of the azure firewall.
     */
    properties: AzureFirewallPropertiesFormat;
    /**
     * @description A list of availability zones denoting where the resource needs to come from.
     */
    zones: Array<string>;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
