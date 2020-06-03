import { AzureFirewallFqdnTagPropertiesFormat } from './AzureFirewallFqdnTagPropertiesFormat';
import { Resource } from './Resource';

/**
 * @description Azure Firewall FQDN Tag Resource.
 * @since 2019-07-01
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
