import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { ProvisioningState } from "../enums/ProvisioningState";
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
     * @Optional  '2017-11-01' - made property required
     */
    subnet: SubResource;
    /**
     * @description The reference of the public IP resource.
     * @Optional  '2017-11-01' - made property required
     */
    publicIPAddress: SubResource;
    /**
     * @description The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     */
    readonly provisioningState: ProvisioningState | string ;
    /** @description Private IP Address for this gateway.
     * @since 2019-12-01
     */
    readonly privateIPAddress: string;
}
