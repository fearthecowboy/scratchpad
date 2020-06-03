import { SubResource } from './SubResource';
import { VpnConnectionProperties } from './VpnConnectionProperties';
/**
 * @description VpnConnection Resource.
 */
export interface VpnConnection extends SubResource {
    /**
     * @description Properties of the VPN connection.
     */
    properties: VpnConnectionProperties;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
