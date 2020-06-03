import { ProvisioningState } from '../enums/ProvisioningState';
import { ExpressRouteCircuitPeeringId } from './ExpressRouteCircuitPeeringId';
import { RoutingConfiguration } from "./RoutingConfiguration";

/**
 * @description Properties of the ExpressRouteConnection subresource.
 * @since 2019-07-01
 */
export interface ExpressRouteConnectionProperties {
    /**
     * @description The provisioning state of the express route connection resource.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The ExpressRoute circuit peering.
     */
    expressRouteCircuitPeering?: ExpressRouteCircuitPeeringId;
    /**
     * @description Authorization key to establish the connection.
     */
    authorizationKey: string;
    /**
     * @description The routing weight associated to the connection.
     */
    routingWeight: int64;
    /** @description Enable internet security.
     * @since 2019-12-01
     */
    enableInternetSecurity: boolean;
    /** @description The Routing Configuration indicating the associated and propagated route tables on this connection.
     * @since 2020-04-01
     */
    routingConfiguration: RoutingConfiguration;
}
