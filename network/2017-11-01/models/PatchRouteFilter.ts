import { SubResource } from './SubResource';
import { RouteFilterPropertiesFormat } from './RouteFilterPropertiesFormat';
/**
 * @description Route Filter Resource.
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
