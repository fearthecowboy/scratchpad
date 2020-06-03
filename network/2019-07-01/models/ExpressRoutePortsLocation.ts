import { Resource } from './Resource';
import { ExpressRoutePortsLocationPropertiesFormat } from './ExpressRoutePortsLocationPropertiesFormat';
/**
 * ExpressRoutePorts Peering Location
 * @description Definition of the ExpressRoutePorts peering location resource.
 */
export interface ExpressRoutePortsLocation extends Resource {
    /**
     * @description ExpressRoutePort peering location properties.
     */
    properties: ExpressRoutePortsLocationPropertiesFormat;
}
