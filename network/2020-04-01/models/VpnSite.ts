import { Resource } from './Resource';
import { VpnSiteProperties } from './VpnSiteProperties';
/**
 * @description VpnSite Resource.
 */
export interface VpnSite extends Resource {
    /**
     * @description Properties of the VPN site.
     */
    properties: VpnSiteProperties;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
