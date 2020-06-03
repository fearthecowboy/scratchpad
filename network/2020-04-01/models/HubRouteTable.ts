import { SubResource } from './SubResource';
import { HubRouteTableProperties } from './HubRouteTableProperties';
/**
 * @description RouteTable resource in a virtual hub.
 */
export interface HubRouteTable extends SubResource {
    /**
     * @description Properties of the RouteTable resource.
     */
    properties: HubRouteTableProperties;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Resource type.
     */
    readonly type: string ;
}
