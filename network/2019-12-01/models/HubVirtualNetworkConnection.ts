import { SubResource } from './SubResource';
import { HubVirtualNetworkConnectionProperties } from './HubVirtualNetworkConnectionProperties';
/**
 * @description HubVirtualNetworkConnection Resource.
 */
export interface HubVirtualNetworkConnection extends SubResource {
    /**
     * @description Properties of the hub virtual network connection.
     */
    properties: HubVirtualNetworkConnectionProperties;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
