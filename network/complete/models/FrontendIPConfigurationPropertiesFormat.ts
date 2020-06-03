import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { IPVersion } from "../enums/IPVersion";
import { ProvisioningState } from "../enums/ProvisioningState";
import { PublicIPAddress } from './PublicIPAddress';
import { Subnet } from './Subnet';
import { SubResource } from './SubResource';

/**
 * @description Properties of Frontend IP Configuration of the load balancer.
 */
export interface FrontendIPConfigurationPropertiesFormat {
    /**
     * @description Read only. Inbound rules URIs that use this frontend IP.
     */
    readonly inboundNatRules: Array<SubResource>;
    /**
     * @description Read only. Inbound pools URIs that use this frontend IP.
     */
    readonly inboundNatPools: Array<SubResource>;
    /**
     * @description Read only. Outbound rules URIs that use this frontend IP.
     * @deleted 2019-07-01
     */
    readonly outboundNatRules: Array<SubResource>;
    /**
     * @description Gets load balancing rules URIs that use this frontend IP.
     */
    readonly loadBalancingRules: Array<SubResource>;
    /**
     * @description The private IP address of the IP configuration.
     */
    privateIPAddress: string;
    /**
     * @description The Private IP allocation method. Possible values are: 'Static' and 'Dynamic'.
     */
    privateIPAllocationMethod: IPAllocationMethod | string;
    /**
     * @description The reference of the subnet resource.
     */
    subnet: Subnet;
    /**
     * @description The reference of the Public IP resource.
     */
    publicIPAddress: PublicIPAddress;
    /**
     * @description Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description An array of references to outbound rules that use this frontend IP.
     * @since 2019-07-01
     */
    readonly outboundRules: Array<SubResource>;
    /** @description Whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
     * @since 2019-07-01
     */
    privateIPAddressVersion: IPVersion | string;
    /** @description The reference of the Public IP Prefix resource.
     * @since 2019-07-01
     */
    publicIPPrefix: SubResource;
}
