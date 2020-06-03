import { ExpressRouteCircuitPeeringState } from '../enums/ExpressRouteCircuitPeeringState';
import { ExpressRouteCircuitPeeringConfig } from './ExpressRouteCircuitPeeringConfig';
import { SubResource } from "./SubResource";

/**
 * @description Contains IPv6 peering config.
 * @since 2017-11-01
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
     * @Type  '2019-07-01' - type changed from 'RouteFilter' to 'SubResource'
     */
    routeFilter: SubResource;
    /**
     * @description The state of peering. Possible values are: 'Disabled' and 'Enabled'
     */
    state: ExpressRouteCircuitPeeringState | string;
}
