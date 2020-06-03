import { SubResource } from './SubResource';
import { HubVirtualNetworkConnection } from './HubVirtualNetworkConnection';
import { VirtualHubRouteTable } from './VirtualHubRouteTable';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Parameters for VirtualHub.
 */
export interface VirtualHubProperties {
    /**
     * @description The VirtualWAN to which the VirtualHub belongs.
     */
    virtualWan: SubResource;
    /**
     * @description The VpnGateway associated with this VirtualHub.
     */
    vpnGateway: SubResource;
    /**
     * @description The P2SVpnGateway associated with this VirtualHub.
     */
    p2SVpnGateway: SubResource;
    /**
     * @description The expressRouteGateway associated with this VirtualHub.
     */
    expressRouteGateway: SubResource;
    /**
     * @description List of all vnet connections with this VirtualHub.
     */
    virtualNetworkConnections: Array<HubVirtualNetworkConnection>;
    /**
     * @description Address-prefix for this VirtualHub.
     */
    addressPrefix: string;
    /**
     * @description The routeTable associated with this virtual hub.
     */
    routeTable: VirtualHubRouteTable;
    /**
     * @description The provisioning state of the virtual hub resource.
     */
    provisioningState: ProvisioningState | string;
}
