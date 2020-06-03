import { SubResource } from './SubResource';
import { VpnSiteLinkConnectionProperties } from './VpnSiteLinkConnectionProperties';
/**
 * @description VpnSiteLinkConnection Resource.
 */
export interface VpnSiteLinkConnection extends SubResource {
    /**
     * @description Properties of the VPN site link connection.
     */
    properties: VpnSiteLinkConnectionProperties;
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
