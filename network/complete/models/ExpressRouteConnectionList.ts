import { ExpressRouteConnection } from './ExpressRouteConnection';

/**
 * @description ExpressRouteConnection list.
 * @since 2019-07-01
 */
export interface ExpressRouteConnectionList {
    /**
     * @description The list of ExpressRoute connections.
     */
    value: Array<ExpressRouteConnection>;
}
