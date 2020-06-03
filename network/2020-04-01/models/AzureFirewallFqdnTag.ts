import { Resource } from './Resource';
import { AzureFirewallFqdnTagPropertiesFormat } from './AzureFirewallFqdnTagPropertiesFormat';
/**
 * @description Azure Firewall FQDN Tag Resource.
 */
export interface AzureFirewallFqdnTag extends Resource {
    /**
     * @description Properties of the azure firewall FQDN tag.
     */
    properties: AzureFirewallFqdnTagPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
