import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { Subnet } from './Subnet';
import { PublicIPAddress } from './PublicIPAddress';
/**
 * @description Properties of IP configuration.
 */
export interface IPConfigurationPropertiesFormat {
    /**
     * @description The private IP address of the IP configuration.
     */
    privateIPAddress: string;
    /**
     * @description The private IP allocation method. Possible values are 'Static' and 'Dynamic'.
     */
    privateIPAllocationMethod: IPAllocationMethod | string;
    /**
     * @description The reference of the subnet resource.
     */
    subnet: Subnet;
    /**
     * @description The reference of the public IP resource.
     */
    publicIPAddress: PublicIPAddress;
    /**
     * @description Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
