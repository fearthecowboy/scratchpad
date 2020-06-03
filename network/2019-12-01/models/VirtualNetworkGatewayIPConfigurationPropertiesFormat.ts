import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { SubResource } from './SubResource';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of VirtualNetworkGatewayIPConfiguration.
 */
export interface VirtualNetworkGatewayIPConfigurationPropertiesFormat {
    /**
     * @description The private IP address allocation method.
     */
    privateIPAllocationMethod: IPAllocationMethod | string;
    /**
     * @description The reference to the subnet resource.
     */
    subnet: SubResource;
    /**
     * @description The reference to the public IP resource.
     */
    publicIPAddress: SubResource;
    /**
     * @description Private IP Address for this gateway.
     */
    readonly privateIPAddress: string ;
    /**
     * @description The provisioning state of the virtual network gateway IP configuration resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
