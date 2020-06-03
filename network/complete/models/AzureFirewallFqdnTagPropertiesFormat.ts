import { ProvisioningState } from '../enums/ProvisioningState';

/**
 * @description Azure Firewall FQDN Tag Properties.
 * @since 2019-07-01
 */
export interface AzureFirewallFqdnTagPropertiesFormat {
    /**
     * @description The provisioning state of the Azure firewall FQDN tag resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The name of this FQDN Tag.
     */
    readonly fqdnTagName: string ;
}
