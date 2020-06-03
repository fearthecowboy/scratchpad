import { ProvisioningState } from '../enums/ProvisioningState';
import { AddressSpace } from './AddressSpace';
import { BgpSettings } from './BgpSettings';
import { DeviceProperties } from './DeviceProperties';
import { SubResource } from './SubResource';
import { VpnSiteLink } from './VpnSiteLink';

/**
 * @description Parameters for VpnSite.
 * @since 2019-07-01
 */
export interface VpnSiteProperties {
    /**
     * @description The VirtualWAN to which the vpnSite belongs.
     */
    virtualWan: SubResource;
    /**
     * @description The device properties.
     */
    deviceProperties: DeviceProperties;
    /**
     * @description The ip-address for the vpn-site.
     */
    ipAddress: string;
    /**
     * @description The key for vpn-site that can be used for connections.
     */
    siteKey: string;
    /**
     * @description The AddressSpace that contains an array of IP address ranges.
     */
    addressSpace: AddressSpace;
    /**
     * @description The set of bgp properties.
     */
    bgpProperties: BgpSettings;
    /**
     * @description The provisioning state of the VPN site resource.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description IsSecuritySite flag.
     */
    isSecuritySite: boolean;
    /**
     * @description List of all vpn site links.
     */
    vpnSiteLinks: Array<VpnSiteLink>;
}
