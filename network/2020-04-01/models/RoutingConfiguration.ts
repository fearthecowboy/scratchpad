import { SubResource } from './SubResource';
import { PropagatedRouteTable } from './PropagatedRouteTable';
import { VnetRoute } from './VnetRoute';
/**
 * @description Routing Configuration indicating the associated and propagated route tables for this connection.
 */
export interface RoutingConfiguration {
    /**
     * @description The resource id RouteTable associated with this RoutingConfiguration.
     */
    associatedRouteTable: SubResource;
    /**
     * @description The list of RouteTables to advertise the routes to.
     */
    propagatedRouteTables: PropagatedRouteTable;
    /**
     * @description List of routes that control routing from VirtualHub into a virtual network connection.
     */
    vnetRoutes: VnetRoute;
}
