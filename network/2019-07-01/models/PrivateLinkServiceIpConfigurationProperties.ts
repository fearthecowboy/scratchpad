import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { Subnet } from './Subnet';
import { ProvisioningState } from '../enums/ProvisioningState';
import { IPVersion } from '../enums/IPVersion';
/**
 * @description Properties of private link service IP configuration.
 */
export interface PrivateLinkServiceIpConfigurationProperties {
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
     * @description Whether the ip configuration is primary or not.
     */
    primary: boolean;
    /**
     * @description The provisioning state of the private link service IP configuration resource.
     */
    provisioningState: ProvisioningState | string;
    /**
     * @description Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4.
     */
    privateIPAddressVersion: IPVersion | string;
}
