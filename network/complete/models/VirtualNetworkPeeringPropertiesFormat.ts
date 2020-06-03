import { ProvisioningState } from "../enums/ProvisioningState";
import { VirtualNetworkPeeringState } from '../enums/VirtualNetworkPeeringState';
import { AddressSpace } from "./AddressSpace";
import { SubResource } from './SubResource';

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
     * @description The reference of the remote virtual network.
     */
    remoteVirtualNetwork: SubResource;
    /**
     * @description The status of the virtual network peering. Possible values are 'Initiated', 'Connected', and 'Disconnected'.
     */
    peeringState: VirtualNetworkPeeringState | string;
    /**
     * @description The provisioning state of the resource.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description The reference of the remote virtual network address space.
     * @since 2017-11-01
     */
    remoteAddressSpace: AddressSpace;
}
