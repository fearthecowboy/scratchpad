import { ExpressRouteGatewayProperties } from './ExpressRouteGatewayProperties';
import { Resource } from './Resource';

/**
 * @description ExpressRoute gateway resource.
 * @since 2019-07-01
 */
export interface ExpressRouteGateway extends Resource {
    /**
     * @description Properties of the express route gateway.
     */
    properties: ExpressRouteGatewayProperties;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
