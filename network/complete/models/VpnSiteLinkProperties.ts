import { ProvisioningState } from '../enums/ProvisioningState';
import { VpnLinkBgpSettings } from './VpnLinkBgpSettings';
import { VpnLinkProviderProperties } from './VpnLinkProviderProperties';

/**
 * @description Parameters for VpnSite.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description FQDN of vpn-site-link.
     * @since 2019-12-01
     */
    fqdn: string;
}
