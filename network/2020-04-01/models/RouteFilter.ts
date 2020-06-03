import { Resource } from './Resource';
import { RouteFilterPropertiesFormat } from './RouteFilterPropertiesFormat';
/**
 * @description Route Filter Resource.
 */
export interface RouteFilter extends Resource {
    /**
     * @description Properties of the route filter.
     */
    properties: RouteFilterPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
