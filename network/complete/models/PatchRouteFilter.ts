import { RouteFilterPropertiesFormat } from './RouteFilterPropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description Route Filter Resource.
 * @since 2017-11-01
 */
export interface PatchRouteFilter extends SubResource {
    properties: RouteFilterPropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: string ;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Resource type.
     */
    readonly type: string ;
    /**
     * @description Resource tags.
     */
    tags: Dictionary<string>;
}
