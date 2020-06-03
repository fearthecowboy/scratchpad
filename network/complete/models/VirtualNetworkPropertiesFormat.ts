import { ProvisioningState } from "../enums/ProvisioningState";
import { AddressSpace } from './AddressSpace';
import { DhcpOptions } from './DhcpOptions';
import { Subnet } from './Subnet';
import { SubResource } from "./SubResource";
import { VirtualNetworkBgpCommunities } from "./VirtualNetworkBgpCommunities";
import { VirtualNetworkPeering } from './VirtualNetworkPeering';

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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly resourceGuid: string;
    /**
     * @description The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description Indicates if DDoS protection is enabled for all the protected resources in a Virtual Network.
     * @since 2017-11-01
     */
    enableDdosProtection: boolean;
    /** @description Indicates if Vm protection is enabled for all the subnets in a Virtual Network.
     * @since 2017-11-01
     */
    enableVmProtection: boolean;
    /** @description The DDoS protection plan associated with the virtual network.
     * @since 2019-07-01
     */
    ddosProtectionPlan: SubResource;
    /** @description Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET.
     * @since 2019-12-01
     */
    bgpCommunities: VirtualNetworkBgpCommunities;
    /** @description Array of IpAllocation which reference this VNET.
     * @since 2020-04-01
     */
    ipAllocations: Array<SubResource>;
}
