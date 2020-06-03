import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { Subnet } from './Subnet';
import { PublicIPAddress } from './PublicIPAddress';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of IP configuration.
 */
export interface IPConfigurationPropertiesFormat {
    /**
     * @description The private IP address of the IP configuration.
     */
    privateIPAddress: string;
    /**
     * @description The private IP address allocation method.
     */
    privateIPAllocationMethod: IPAllocationMethod | string;
    /**
     * @description The reference to the subnet resource.
     */
    subnet: Subnet;
    /**
     * @description The reference to the public IP resource.
     */
    publicIPAddress: PublicIPAddress;
    /**
     * @description The provisioning state of the IP configuration resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
