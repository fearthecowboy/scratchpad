import { SubResource } from './SubResource';
import { ExpressRouteLinkPropertiesFormat } from './ExpressRouteLinkPropertiesFormat';
/**
 * ExpressRouteLink
 * @description ExpressRouteLink child resource definition.
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
