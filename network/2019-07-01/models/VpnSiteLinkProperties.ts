import { VpnLinkProviderProperties } from './VpnLinkProviderProperties';
import { VpnLinkBgpSettings } from './VpnLinkBgpSettings';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Parameters for VpnSite.
 */
export interface VpnSiteLinkProperties {
    /**
     * @description The link provider properties.
     */
    linkProperties: VpnLinkProviderProperties;
    /**
     * @description The ip-address for the vpn-site-link.
     */
    ipAddress: string;
    /**
     * @description The set of bgp properties.
     */
    bgpProperties: VpnLinkBgpSettings;
    /**
     * @description The provisioning state of the VPN site link resource.
     */
    provisioningState: ProvisioningState | string;
}
