import { ExpressRouteCircuitPeeringType } from '../enums/ExpressRouteCircuitPeeringType';
import { ExpressRouteCircuitPeeringState } from '../enums/ExpressRouteCircuitPeeringState';
import { ExpressRouteCircuitPeeringConfig } from './ExpressRouteCircuitPeeringConfig';
import { ExpressRouteCircuitStats } from './ExpressRouteCircuitStats';
import { RouteFilter } from './RouteFilter';
import { Ipv6ExpressRouteCircuitPeeringConfig } from './Ipv6ExpressRouteCircuitPeeringConfig';
export interface ExpressRouteCircuitPeeringPropertiesFormat {
    /**
     * @description The PeeringType. Possible values are: 'AzurePublicPeering', 'AzurePrivatePeering', and 'MicrosoftPeering'.
     */
    peeringType: ExpressRouteCircuitPeeringType | string;
    /**
     * @description The state of peering. Possible values are: 'Disabled' and 'Enabled'
     */
    state: ExpressRouteCircuitPeeringState | string;
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
     * @description Gets peering stats.
     */
    stats: ExpressRouteCircuitStats;
    /**
     * @description Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
    /**
     * @description The GatewayManager Etag.
     */
    gatewayManagerEtag: string;
    /**
     * @description Gets whether the provider or the customer last modified the peering.
     */
    lastModifiedBy: string;
    /**
     * @description The reference of the RouteFilter resource.
     */
    routeFilter: RouteFilter;
    /**
     * @description The IPv6 peering configuration.
     */
    ipv6PeeringConfig: Ipv6ExpressRouteCircuitPeeringConfig;
}
