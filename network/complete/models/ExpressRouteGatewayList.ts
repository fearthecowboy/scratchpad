import { ExpressRouteGateway } from './ExpressRouteGateway';

/**
 * @description List of ExpressRoute gateways.
 * @since 2019-07-01
 */
export interface ExpressRouteGatewayList {
    /**
     * @description List of ExpressRoute gateways.
     */
    value: Array<ExpressRouteGateway>;
}
