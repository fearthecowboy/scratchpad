import { SubResource } from './SubResource';
import { ExpressRouteConnectionProperties } from './ExpressRouteConnectionProperties';
/**
 * @description ExpressRouteConnection resource.
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
