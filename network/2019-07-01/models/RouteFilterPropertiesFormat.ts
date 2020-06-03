import { RouteFilterRule } from './RouteFilterRule';
import { ExpressRouteCircuitPeering } from './ExpressRouteCircuitPeering';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Route Filter Resource.
 */
export interface RouteFilterPropertiesFormat {
    /**
     * @description Collection of RouteFilterRules contained within a route filter.
     */
    rules: Array<RouteFilterRule>;
    /**
     * @description A collection of references to express route circuit peerings.
     */
    peerings: Array<ExpressRouteCircuitPeering>;
    /**
     * @description A collection of references to express route circuit ipv6 peerings.
     */
    ipv6Peerings: Array<ExpressRouteCircuitPeering>;
    /**
     * @description The provisioning state of the route filter resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
