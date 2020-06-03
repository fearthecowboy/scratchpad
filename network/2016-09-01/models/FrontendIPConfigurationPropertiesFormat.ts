import { SubResource } from './SubResource';
import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { Subnet } from './Subnet';
import { PublicIPAddress } from './PublicIPAddress';
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
     */
    provisioningState: string;
}
