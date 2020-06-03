import { ExpressRouteCircuitPeeringConfig } from './ExpressRouteCircuitPeeringConfig';
import { SubResource } from './SubResource';
import { ExpressRouteCircuitPeeringState } from '../enums/ExpressRouteCircuitPeeringState';
/**
 * @description Contains IPv6 peering config.
 */
export interface Ipv6ExpressRouteCircuitPeeringConfig {
    /**
     * @description The primary address prefix.
     */
    primaryPeerAddressPrefix: string;
    /**
     * @description The secondary address prefix.
     */
    secondaryPeerAddressPrefix: string;
    /**
     * @description The Microsoft peering configuration.
     */
    microsoftPeeringConfig: ExpressRouteCircuitPeeringConfig;
    /**
     * @description The reference to the RouteFilter resource.
     */
    routeFilter: SubResource;
    /**
     * @description The state of peering.
     */
    state: ExpressRouteCircuitPeeringState | string;
}
