import { Resource } from './Resource';
import { ExpressRoutePortPropertiesFormat } from './ExpressRoutePortPropertiesFormat';
import { ManagedServiceIdentity } from './ManagedServiceIdentity';
/**
 * ExpressRoute Port
 * @description ExpressRoutePort resource definition.
 */
export interface ExpressRoutePort extends Resource {
    /**
     * @description ExpressRoutePort properties.
     */
    properties: ExpressRoutePortPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description The identity of ExpressRoutePort, if configured.
     */
    identity: ManagedServiceIdentity;
}
