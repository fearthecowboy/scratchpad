import { SubResource } from './SubResource';
import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { IPVersion } from '../enums/IPVersion';
import { Subnet } from './Subnet';
import { PublicIPAddress } from './PublicIPAddress';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of Frontend IP Configuration of the load balancer.
 */
export interface FrontendIPConfigurationPropertiesFormat {
    /**
     * @description An array of references to inbound rules that use this frontend IP.
     */
    readonly inboundNatRules: Array<SubResource>;
    /**
     * @description An array of references to inbound pools that use this frontend IP.
     */
    readonly inboundNatPools: Array<SubResource>;
    /**
     * @description An array of references to outbound rules that use this frontend IP.
     */
    readonly outboundRules: Array<SubResource>;
    /**
     * @description An array of references to load balancing rules that use this frontend IP.
     */
    readonly loadBalancingRules: Array<SubResource>;
    /**
     * @description The private IP address of the IP configuration.
     */
    privateIPAddress: string;
    /**
     * @description The Private IP allocation method.
     */
    privateIPAllocationMethod: IPAllocationMethod | string;
    /**
     * @description Whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
     */
    privateIPAddressVersion: IPVersion | string;
    /**
     * @description The reference to the subnet resource.
     */
    subnet: Subnet;
    /**
     * @description The reference to the Public IP resource.
     */
    publicIPAddress: PublicIPAddress;
    /**
     * @description The reference to the Public IP Prefix resource.
     */
    publicIPPrefix: SubResource;
    /**
     * @description The provisioning state of the frontend IP configuration resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
