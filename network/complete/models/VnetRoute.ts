import { StaticRoute } from './StaticRoute';
/**
 * @description List of routes that control routing from VirtualHub into a virtual network connection.
 * @since 2020-04-01
 */
export interface VnetRoute {
    /**
     * @description List of all Static Routes.
     */
    staticRoutes: Array<StaticRoute>;
}
