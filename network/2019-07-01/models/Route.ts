import { SubResource } from './SubResource';
import { RoutePropertiesFormat } from './RoutePropertiesFormat';
/**
 * @description Route resource.
 */
export interface Route extends SubResource {
    /**
     * @description Properties of the route.
     */
    properties: RoutePropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
