import { ProvisioningState } from '../enums/ProvisioningState';
import { ExpressRouteCircuitPeeringId } from './ExpressRouteCircuitPeeringId';
/**
 * @description Properties of the ExpressRouteConnection subresource.
 */
export interface ExpressRouteConnectionProperties {
    /**
     * @description The provisioning state of the express route connection resource.
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
    /**
     * @description Enable internet security.
     */
    enableInternetSecurity: boolean;
}
