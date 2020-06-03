import { HubVirtualNetworkConnectionProperties } from './HubVirtualNetworkConnectionProperties';
import { SubResource } from './SubResource';

/**
 * @description HubVirtualNetworkConnection Resource.
 * @since 2019-07-01
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
