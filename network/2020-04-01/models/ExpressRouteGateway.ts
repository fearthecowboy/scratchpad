import { Resource } from './Resource';
import { ExpressRouteGatewayProperties } from './ExpressRouteGatewayProperties';
/**
 * @description ExpressRoute gateway resource.
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
