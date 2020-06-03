import { ProvisioningState } from '../enums/ProvisioningState';
import { SubResource } from './SubResource';

/**
 * @description Properties of IP configuration of an Azure Firewall.
 * @since 2019-07-01
 */
export interface AzureFirewallIPConfigurationPropertiesFormat {
    /**
     * @description The Firewall Internal Load Balancer IP to be used as the next hop in User Defined Routes.
     */
    readonly privateIPAddress: string ;
    /**
     * @description Reference of the subnet resource. This resource must be named 'AzureFirewallSubnet'.
     */
    subnet: SubResource;
    /**
     * @description Reference of the PublicIP resource. This field is a mandatory input if subnet is not null.
     */
    publicIPAddress: SubResource;
    /**
     * @description The provisioning state of the Azure firewall IP configuration resource.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
