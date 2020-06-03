import { ExpressRouteCircuitPeeringConfig } from './ExpressRouteCircuitPeeringConfig';
import { RouteFilter } from './RouteFilter';
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
     * @description The reference of the RouteFilter resource.
     */
    routeFilter: RouteFilter;
    /**
     * @description The state of peering. Possible values are: 'Disabled' and 'Enabled'
     */
    state: ExpressRouteCircuitPeeringState | string;
}
