import { SubResource } from './SubResource';
import { AddressSpace } from './AddressSpace';
import { VirtualNetworkPeeringState } from '../enums/VirtualNetworkPeeringState';
/**
 * @description Properties of the virtual network peering.
 */
export interface VirtualNetworkPeeringPropertiesFormat {
    /**
     * @description Whether the VMs in the linked virtual network space would be able to access all the VMs in local Virtual network space.
     */
    allowVirtualNetworkAccess: boolean;
    /**
     * @description Whether the forwarded traffic from the VMs in the remote virtual network will be allowed/disallowed.
     */
    allowForwardedTraffic: boolean;
    /**
     * @description If gateway links can be used in remote virtual networking to link to this virtual network.
     */
    allowGatewayTransit: boolean;
    /**
     * @description If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
     */
    useRemoteGateways: boolean;
    /**
     * @description The reference of the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
     */
    remoteVirtualNetwork: SubResource;
    /**
     * @description The reference of the remote virtual network address space.
     */
    remoteAddressSpace: AddressSpace;
    /**
     * @description The status of the virtual network peering. Possible values are 'Initiated', 'Connected', and 'Disconnected'.
     */
    peeringState: VirtualNetworkPeeringState | string;
    /**
     * @description The provisioning state of the resource.
     */
    provisioningState: string;
}
