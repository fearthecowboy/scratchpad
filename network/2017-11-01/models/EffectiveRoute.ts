import { EffectiveRouteSource } from '../enums/EffectiveRouteSource';
import { EffectiveRouteState } from '../enums/EffectiveRouteState';
import { RouteNextHopType } from '../enums/RouteNextHopType';
/**
 * @description Effective Route
 */
export interface EffectiveRoute {
    /**
     * @description The name of the user defined route. This is optional.
     */
    name: string;
    /**
     * @description Who created the route. Possible values are: 'Unknown', 'User', 'VirtualNetworkGateway', and 'Default'.
     */
    source: EffectiveRouteSource | string;
    /**
     * @description The value of effective route. Possible values are: 'Active' and 'Invalid'.
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
     * @description The type of Azure hop the packet should be sent to. Possible values are: 'VirtualNetworkGateway', 'VnetLocal', 'Internet', 'VirtualAppliance', and 'None'.
     */
    nextHopType: RouteNextHopType | string;
}
