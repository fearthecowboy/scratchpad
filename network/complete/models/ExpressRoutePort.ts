import { ExpressRoutePortPropertiesFormat } from './ExpressRoutePortPropertiesFormat';
import { ManagedServiceIdentity } from './ManagedServiceIdentity';
import { Resource } from './Resource';

/**
 * ExpressRoute Port
 * @description ExpressRoutePort resource definition.
 * @since 2019-07-01
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
