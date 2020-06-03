import { ExpressRouteCircuitPeeringType } from '../enums/ExpressRouteCircuitPeeringType';
import { ExpressRouteCircuitPeeringState } from '../enums/ExpressRouteCircuitPeeringState';
import { ExpressRouteCircuitPeeringConfig } from './ExpressRouteCircuitPeeringConfig';
import { ExpressRouteCircuitStats } from './ExpressRouteCircuitStats';
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
    peerASN: int32;
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
}
