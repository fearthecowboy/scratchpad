import { Resource } from './Resource';
import { AzureFirewallPropertiesFormat } from './AzureFirewallPropertiesFormat';
/**
 * @description Azure Firewall resource.
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
