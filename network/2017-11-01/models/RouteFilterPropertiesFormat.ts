import { RouteFilterRule } from './RouteFilterRule';
import { ExpressRouteCircuitPeering } from './ExpressRouteCircuitPeering';
/**
 * @description Route Filter Resource
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
     * @description The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
     */
    readonly provisioningState: string ;
}
