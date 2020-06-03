import { Resource } from './Resource';
import { RouteFilterPropertiesFormat } from './RouteFilterPropertiesFormat';

/**
 * @description Route Filter Resource.
 * @since 2017-11-01
 */
export interface RouteFilter extends Resource {
    properties: RouteFilterPropertiesFormat;
    /**
     * @description Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
