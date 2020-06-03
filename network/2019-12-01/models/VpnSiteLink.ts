import { SubResource } from './SubResource';
import { VpnSiteLinkProperties } from './VpnSiteLinkProperties';
/**
 * @description VpnSiteLink Resource.
 */
export interface VpnSiteLink extends SubResource {
    /**
     * @description Properties of the VPN site link.
     */
    properties: VpnSiteLinkProperties;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description Resource type.
     */
    readonly type: string ;
}
