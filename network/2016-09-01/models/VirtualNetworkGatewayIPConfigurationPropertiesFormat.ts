import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { SubResource } from './SubResource';
/**
 * @description Properties of VirtualNetworkGatewayIPConfiguration
 */
export interface VirtualNetworkGatewayIPConfigurationPropertiesFormat {
    /**
     * @description The private IP allocation method. Possible values are: 'Static' and 'Dynamic'.
     */
    privateIPAllocationMethod: IPAllocationMethod | string;
    /**
     * @description The reference of the subnet resource.
     */
    subnet?: SubResource;
    /**
     * @description The reference of the public IP resource.
     */
    publicIPAddress?: SubResource;
    /**
     * @description The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: string ;
}
