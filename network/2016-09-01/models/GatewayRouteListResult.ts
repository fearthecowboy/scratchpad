import { GatewayRoute } from './GatewayRoute';
/**
 * @description List of virtual network gateway routes
 */
export interface GatewayRouteListResult {
    /**
     * @description List of gateway routes
     */
    value: Array<GatewayRoute>;
}
