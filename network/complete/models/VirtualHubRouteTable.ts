import { VirtualHubRoute } from './VirtualHubRoute';

/**
 * @description VirtualHub route table.
 * @since 2019-07-01
 */
export interface VirtualHubRouteTable {
    /**
     * @description List of all routes.
     */
    routes: Array<VirtualHubRoute>;
}
