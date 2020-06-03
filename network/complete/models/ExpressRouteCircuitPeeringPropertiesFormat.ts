import { ExpressRoutePeeringState } from "../enums/ExpressRoutePeeringState";
import { ExpressRoutePeeringType } from "../enums/ExpressRoutePeeringType";
import { ProvisioningState } from "../enums/ProvisioningState";
import { ExpressRouteCircuitConnection } from "./ExpressRouteCircuitConnection";
import { ExpressRouteCircuitPeeringConfig } from './ExpressRouteCircuitPeeringConfig';
import { ExpressRouteCircuitStats } from './ExpressRouteCircuitStats';
import { ExpressRouteConnectionId } from "./ExpressRouteConnectionId";
import { Ipv6ExpressRouteCircuitPeeringConfig } from "./Ipv6ExpressRouteCircuitPeeringConfig";
import { PeerExpressRouteCircuitConnection } from "./PeerExpressRouteCircuitConnection";
import { SubResource } from "./SubResource";

export interface ExpressRouteCircuitPeeringPropertiesFormat {
    /**
     * @description The PeeringType. Possible values are: 'AzurePublicPeering', 'AzurePrivatePeering', and 'MicrosoftPeering'.
     * @Type  '2019-07-01' - type changed from 'ExpressRouteCircuitPeeringType | string' to 'ExpressRoutePeeringType | string'
     */
    peeringType: ExpressRoutePeeringType | string;
    /**
     * @description The state of peering. Possible values are: 'Disabled' and 'Enabled'
     * @Type  '2019-07-01' - type changed from 'ExpressRouteCircuitPeeringState | string' to 'ExpressRoutePeeringState | string'
     */
    state: ExpressRoutePeeringState | string;
    /**
     * @description The Azure ASN.
     */
    azureASN: int32;
    /**
     * @description The peer ASN.
     * @Type  '2017-11-01' - type changed from 'int32' to 'int64 & Minimum<1> & Maximum<4294967295>'
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
     * @description Gets peering stats.
     */
    stats: ExpressRouteCircuitStats;
    /**
     * @description Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The GatewayManager Etag.
     */
    gatewayManagerEtag: string;
    /**
     * @description Gets whether the provider or the customer last modified the peering.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly lastModifiedBy: string;
    /** @description The reference of the RouteFilter resource.
     * @since 2017-11-01
     * @Type  '2019-07-01' - type changed from 'RouteFilter' to 'SubResource'
     */
    routeFilter: SubResource;
    /** @description The IPv6 peering configuration.
     * @since 2017-11-01
     */
    ipv6PeeringConfig: Ipv6ExpressRouteCircuitPeeringConfig;
    /** @description The ExpressRoute connection.
     * @since 2019-07-01
     */
    expressRouteConnection: ExpressRouteConnectionId;
    /** @description The list of circuit connections associated with Azure Private Peering for this circuit.
     * @since 2019-07-01
     */
    connections: Array<ExpressRouteCircuitConnection>;
    /** @description The list of peered circuit connections associated with Azure Private Peering for this circuit.
     * @since 2019-07-01
     */
    readonly peeredConnections: Array<PeerExpressRouteCircuitConnection>;
}
