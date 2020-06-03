import { ExpressRouteConnectionProperties } from './ExpressRouteConnectionProperties';
import { SubResource } from './SubResource';

/**
 * @description ExpressRouteConnection resource.
 * @since 2019-07-01
 */
export interface ExpressRouteConnection extends SubResource {
    /**
     * @description Properties of the express route connection.
     */
    properties: ExpressRouteConnectionProperties;
    /**
     * @description The name of the resource.
     */
    name?: string;
}
