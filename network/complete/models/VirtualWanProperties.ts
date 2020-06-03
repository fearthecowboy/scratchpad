import { OfficeTrafficCategory } from '../enums/OfficeTrafficCategory';
import { ProvisioningState } from '../enums/ProvisioningState';
import { P2SVpnServerConfiguration } from './P2SVpnServerConfiguration';
import { SubResource } from './SubResource';

/**
 * @description Parameters for VirtualWAN.
 * @since 2019-07-01
 */
export interface VirtualWanProperties {
    /**
     * @description Vpn encryption to be disabled or not.
     */
    disableVpnEncryption: boolean;
    /**
     * @description List of VirtualHubs in the VirtualWAN.
     */
    readonly virtualHubs: Array<SubResource>;
    /**
     * @description List of VpnSites in the VirtualWAN.
     */
    readonly vpnSites: Array<SubResource>;
    /**
     * @description The Security Provider name.
     * @deleted 2019-12-01
     */
    securityProviderName: string;
    /**
     * @description True if branch to branch traffic is allowed.
     */
    allowBranchToBranchTraffic: boolean;
    /**
     * @description True if Vnet to Vnet traffic is allowed.
     */
    allowVnetToVnetTraffic: boolean;
    /**
     * @description The office local breakout category.
     */
    office365LocalBreakoutCategory: OfficeTrafficCategory | string;
    /**
     * @description List of all P2SVpnServerConfigurations associated with the virtual wan.
     * @deleted 2019-12-01
     */
    p2SVpnServerConfigurations: Array<P2SVpnServerConfiguration>;
    /**
     * @description The provisioning state of the virtual WAN resource.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description The type of the VirtualWAN.
     * @since 2019-12-01
     */
    type: string;
}
