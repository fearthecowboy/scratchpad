import { ProvisioningState } from '../enums/ProvisioningState';
import { HubVirtualNetworkConnection } from './HubVirtualNetworkConnection';
import { SubResource } from './SubResource';
import { VirtualHubRouteTable } from './VirtualHubRouteTable';
import { VirtualHubRouteTableV2 } from "./VirtualHubRouteTableV2";

/**
 * @description Parameters for VirtualHub.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description The azureFirewall associated with this VirtualHub.
     * @since 2019-12-01
     */
    azureFirewall: SubResource;
    /** @description The Security Provider name.
     * @since 2019-12-01
     */
    securityProviderName: string;
    /** @description List of all virtual hub route table v2s associated with this VirtualHub.
     * @since 2019-12-01
     */
    virtualHubRouteTableV2s: Array<VirtualHubRouteTableV2>;
    /** @description The sku of this VirtualHub.
     * @since 2019-12-01
     */
    sku: string;
    /** @description The securityPartnerProvider associated with this VirtualHub.
     * @since 2020-04-01
     */
    securityPartnerProvider: SubResource;
}
