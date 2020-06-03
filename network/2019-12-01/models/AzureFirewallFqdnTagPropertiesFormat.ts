import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Azure Firewall FQDN Tag Properties.
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
