import { AddressSpace } from './AddressSpace';
import { DhcpOptions } from './DhcpOptions';
import { Subnet } from './Subnet';
import { VirtualNetworkPeering } from './VirtualNetworkPeering';
import { ProvisioningState } from '../enums/ProvisioningState';
import { SubResource } from './SubResource';
import { VirtualNetworkBgpCommunities } from './VirtualNetworkBgpCommunities';
/**
 * @description Properties of the virtual network.
 */
export interface VirtualNetworkPropertiesFormat {
    /**
     * @description The AddressSpace that contains an array of IP address ranges that can be used by subnets.
     */
    addressSpace: AddressSpace;
    /**
     * @description The dhcpOptions that contains an array of DNS servers available to VMs deployed in the virtual network.
     */
    dhcpOptions: DhcpOptions;
    /**
     * @description A list of subnets in a Virtual Network.
     */
    subnets: Array<Subnet>;
    /**
     * @description A list of peerings in a Virtual Network.
     */
    virtualNetworkPeerings: Array<VirtualNetworkPeering>;
    /**
     * @description The resourceGuid property of the Virtual Network resource.
     */
    readonly resourceGuid: string ;
    /**
     * @description The provisioning state of the virtual network resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description Indicates if DDoS protection is enabled for all the protected resources in the virtual network. It requires a DDoS protection plan associated with the resource.
     */
    enableDdosProtection: boolean;
    /**
     * @description Indicates if VM protection is enabled for all the subnets in the virtual network.
     */
    enableVmProtection: boolean;
    /**
     * @description The DDoS protection plan associated with the virtual network.
     */
    ddosProtectionPlan: SubResource;
    /**
     * @description Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET.
     */
    bgpCommunities: VirtualNetworkBgpCommunities;
}
