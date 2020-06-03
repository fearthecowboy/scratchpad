import { SubResource } from './SubResource';
import { VirtualHubRouteTableV2Properties } from './VirtualHubRouteTableV2Properties';
/**
 * @description VirtualHubRouteTableV2 Resource.
 */
export interface VirtualHubRouteTableV2 extends SubResource {
    /**
     * @description Properties of the virtual hub route table v2.
     */
    properties: VirtualHubRouteTableV2Properties;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
