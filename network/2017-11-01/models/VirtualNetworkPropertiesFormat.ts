import { AddressSpace } from './AddressSpace';
import { DhcpOptions } from './DhcpOptions';
import { Subnet } from './Subnet';
import { VirtualNetworkPeering } from './VirtualNetworkPeering';
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
    resourceGuid: string;
    /**
     * @description The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
    /**
     * @description Indicates if DDoS protection is enabled for all the protected resources in a Virtual Network.
     */
    enableDdosProtection: boolean;
    /**
     * @description Indicates if Vm protection is enabled for all the subnets in a Virtual Network.
     */
    enableVmProtection: boolean;
}
