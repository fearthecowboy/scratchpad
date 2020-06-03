import { ExpressRouteLinkPropertiesFormat } from './ExpressRouteLinkPropertiesFormat';
import { SubResource } from './SubResource';

/**
 * ExpressRouteLink
 * @description ExpressRouteLink child resource definition.
 * @since 2019-07-01
 */
export interface ExpressRouteLink extends SubResource {
    /**
     * @description ExpressRouteLink properties.
     */
    properties: ExpressRouteLinkPropertiesFormat;
    /**
     * @description Name of child port resource that is unique among child port resources of the parent.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
