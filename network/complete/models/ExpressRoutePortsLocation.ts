import { ExpressRoutePortsLocationPropertiesFormat } from './ExpressRoutePortsLocationPropertiesFormat';
import { Resource } from './Resource';

/**
 * ExpressRoutePorts Peering Location
 * @description Definition of the ExpressRoutePorts peering location resource.
 * @since 2019-07-01
 */
export interface ExpressRoutePortsLocation extends Resource {
    /**
     * @description ExpressRoutePort peering location properties.
     */
    properties: ExpressRoutePortsLocationPropertiesFormat;
}
