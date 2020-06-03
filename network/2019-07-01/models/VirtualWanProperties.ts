import { SubResource } from './SubResource';
import { OfficeTrafficCategory } from '../enums/OfficeTrafficCategory';
import { P2SVpnServerConfiguration } from './P2SVpnServerConfiguration';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Parameters for VirtualWAN.
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
     */
    p2SVpnServerConfigurations: Array<P2SVpnServerConfiguration>;
    /**
     * @description The provisioning state of the virtual WAN resource.
     */
    provisioningState: ProvisioningState | string;
}
