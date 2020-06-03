import { ExpressRoutePeeringType } from '../enums/ExpressRoutePeeringType';
import { ExpressRoutePeeringState } from '../enums/ExpressRoutePeeringState';
import { ExpressRouteCircuitPeeringConfig } from './ExpressRouteCircuitPeeringConfig';
import { ExpressRouteCircuitStats } from './ExpressRouteCircuitStats';
import { ProvisioningState } from '../enums/ProvisioningState';
import { SubResource } from './SubResource';
import { Ipv6ExpressRouteCircuitPeeringConfig } from './Ipv6ExpressRouteCircuitPeeringConfig';
import { ExpressRouteConnectionId } from './ExpressRouteConnectionId';
import { ExpressRouteCircuitConnection } from './ExpressRouteCircuitConnection';
import { PeerExpressRouteCircuitConnection } from './PeerExpressRouteCircuitConnection';
/**
 * @description Properties of the express route circuit peering.
 */
export interface ExpressRouteCircuitPeeringPropertiesFormat {
    /**
     * @description The peering type.
     */
    peeringType: ExpressRoutePeeringType | string;
    /**
     * @description The peering state.
     */
    state: ExpressRoutePeeringState | string;
    /**
     * @description The Azure ASN.
     */
    azureASN: int32;
    /**
     * @description The peer ASN.
     */
    peerASN: int64 & Minimum<1> & Maximum<4294967295>;
    /**
     * @description The primary address prefix.
     */
    primaryPeerAddressPrefix: string;
    /**
     * @description The secondary address prefix.
     */
    secondaryPeerAddressPrefix: string;
    /**
     * @description The primary port.
     */
    primaryAzurePort: string;
    /**
     * @description The secondary port.
     */
    secondaryAzurePort: string;
    /**
     * @description The shared key.
     */
    sharedKey: string;
    /**
     * @description The VLAN ID.
     */
    vlanId: int32;
    /**
     * @description The Microsoft peering configuration.
     */
    microsoftPeeringConfig: ExpressRouteCircuitPeeringConfig;
    /**
     * @description The peering stats of express route circuit.
     */
    stats: ExpressRouteCircuitStats;
    /**
     * @description The provisioning state of the express route circuit peering resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The GatewayManager Etag.
     */
    gatewayManagerEtag: string;
    /**
     * @description Who was the last to modify the peering.
     */
    readonly lastModifiedBy: string ;
    /**
     * @description The reference to the RouteFilter resource.
     */
    routeFilter: SubResource;
    /**
     * @description The IPv6 peering configuration.
     */
    ipv6PeeringConfig: Ipv6ExpressRouteCircuitPeeringConfig;
    /**
     * @description The ExpressRoute connection.
     */
    expressRouteConnection: ExpressRouteConnectionId;
    /**
     * @description The list of circuit connections associated with Azure Private Peering for this circuit.
     */
    connections: Array<ExpressRouteCircuitConnection>;
    /**
     * @description The list of peered circuit connections associated with Azure Private Peering for this circuit.
     */
    readonly peeredConnections: Array<PeerExpressRouteCircuitConnection>;
}
