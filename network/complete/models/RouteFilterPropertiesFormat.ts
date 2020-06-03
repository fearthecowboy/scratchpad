import { ProvisioningState } from "../enums/ProvisioningState";
import { ExpressRouteCircuitPeering } from './ExpressRouteCircuitPeering';
import { RouteFilterRule } from './RouteFilterRule';

/**
 * @description Route Filter Resource
 * @since 2017-11-01
 */
export interface RouteFilterPropertiesFormat {
    /**
     * @description Collection of RouteFilterRules contained within a route filter.
     */
    rules: Array<RouteFilterRule>;
    /**
     * @description A collection of references to express route circuit peerings.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly peerings: Array<ExpressRouteCircuitPeering>;
    /**
     * @description The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     */
    readonly provisioningState: ProvisioningState | string ;
    /** @description A collection of references to express route circuit ipv6 peerings.
     * @since 2019-07-01
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly ipv6Peerings: Array<ExpressRouteCircuitPeering>;
}
