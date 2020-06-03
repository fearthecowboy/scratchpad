import { EffectiveRouteSource } from '../enums/EffectiveRouteSource';
import { EffectiveRouteState } from '../enums/EffectiveRouteState';
import { RouteNextHopType } from '../enums/RouteNextHopType';
/**
 * @description Effective Route.
 */
export interface EffectiveRoute {
    /**
     * @description The name of the user defined route. This is optional.
     */
    name: string;
    /**
     * @description If true, on-premises routes are not propagated to the network interfaces in the subnet.
     */
    disableBgpRoutePropagation: boolean;
    /**
     * @description Who created the route.
     */
    source: EffectiveRouteSource | string;
    /**
     * @description The value of effective route.
     */
    state: EffectiveRouteState | string;
    /**
     * @description The address prefixes of the effective routes in CIDR notation.
     */
    addressPrefix: Array<string>;
    /**
     * @description The IP address of the next hop of the effective route.
     */
    nextHopIpAddress: Array<string>;
    /**
     * @description The type of Azure hop the packet should be sent to.
     */
    nextHopType: RouteNextHopType | string;
}
