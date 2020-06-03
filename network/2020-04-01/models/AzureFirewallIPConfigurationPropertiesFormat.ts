import { SubResource } from './SubResource';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of IP configuration of an Azure Firewall.
 */
export interface AzureFirewallIPConfigurationPropertiesFormat {
    /**
     * @description The Firewall Internal Load Balancer IP to be used as the next hop in User Defined Routes.
     */
    readonly privateIPAddress: string ;
    /**
     * @description Reference to the subnet resource. This resource must be named 'AzureFirewallSubnet' or 'AzureFirewallManagementSubnet'.
     */
    subnet: SubResource;
    /**
     * @description Reference to the PublicIP resource. This field is a mandatory input if subnet is not null.
     */
    publicIPAddress: SubResource;
    /**
     * @description The provisioning state of the Azure firewall IP configuration resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
