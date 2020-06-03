import { SubResource } from './SubResource';
import { OfficeTrafficCategory } from '../enums/OfficeTrafficCategory';
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
     * @description The provisioning state of the virtual WAN resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The type of the VirtualWAN.
     */
    type: string;
}
