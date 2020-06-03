import { ExpressRoutePeeringType } from '../enums/ExpressRoutePeeringType';
import { ExpressRoutePeeringState } from '../enums/ExpressRoutePeeringState';
import { ExpressRouteCircuitPeeringConfig } from './ExpressRouteCircuitPeeringConfig';
import { ProvisioningState } from '../enums/ProvisioningState';
import { Ipv6ExpressRouteCircuitPeeringConfig } from './Ipv6ExpressRouteCircuitPeeringConfig';
/**
 * @description Properties of express route cross connection peering.
 */
export interface ExpressRouteCrossConnectionPeeringProperties {
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
    readonly azureASN: int32;
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
    readonly primaryAzurePort: string ;
    /**
     * @description The secondary port.
     */
    readonly secondaryAzurePort: string ;
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
     * @description The provisioning state of the express route cross connection peering resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The GatewayManager Etag.
     */
    gatewayManagerEtag: string;
    /**
     * @description Who was the last to modify the peering.
     */
    lastModifiedBy: string;
    /**
     * @description The IPv6 peering configuration.
     */
    ipv6PeeringConfig: Ipv6ExpressRouteCircuitPeeringConfig;
}
