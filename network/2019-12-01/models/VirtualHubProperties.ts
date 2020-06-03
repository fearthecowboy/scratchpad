import { SubResource } from './SubResource';
import { HubVirtualNetworkConnection } from './HubVirtualNetworkConnection';
import { VirtualHubRouteTable } from './VirtualHubRouteTable';
import { ProvisioningState } from '../enums/ProvisioningState';
import { VirtualHubRouteTableV2 } from './VirtualHubRouteTableV2';
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
     * @description The azureFirewall associated with this VirtualHub.
     */
    azureFirewall: SubResource;
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
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The Security Provider name.
     */
    securityProviderName: string;
    /**
     * @description List of all virtual hub route table v2s associated with this VirtualHub.
     */
    virtualHubRouteTableV2s: Array<VirtualHubRouteTableV2>;
    /**
     * @description The sku of this VirtualHub.
     */
    sku: string;
}
