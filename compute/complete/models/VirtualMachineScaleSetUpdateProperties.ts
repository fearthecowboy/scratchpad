import { AdditionalCapabilities } from "./AdditionalCapabilities";
import { AutomaticRepairsPolicy } from "./AutomaticRepairsPolicy";
import { ScaleInPolicy } from "./ScaleInPolicy";
import { SubResource } from "./SubResource";
import { UpgradePolicy } from './UpgradePolicy';
import { VirtualMachineScaleSetUpdateVMProfile } from './VirtualMachineScaleSetUpdateVMProfile';

/**
 * @description Describes the properties of a Virtual Machine Scale Set.
 * @since 2017-03-30
 */
export interface VirtualMachineScaleSetUpdateProperties {
    /**
     * @description The upgrade policy.
     */
    upgradePolicy: UpgradePolicy;
    /**
     * @description The virtual machine profile.
     */
    virtualMachineProfile: VirtualMachineScaleSetUpdateVMProfile;
    /**
     * @description Specifies whether the Virtual Machine Scale Set should be overprovisioned.
     */
    overprovision: boolean;
    /**
     * @description When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true.
     */
    singlePlacementGroup: boolean;
    /** @description Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. <br><br>Minimum api-version: 2018-04-01.
     * @since 2018-06-01
     */
    proximityPlacementGroup: SubResource;
    /** @description Policy for automatic repairs.
     * @since 2019-12-01
     */
    automaticRepairsPolicy: AutomaticRepairsPolicy;
    /** @description When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs.
     * @since 2019-12-01
     */
    doNotRunExtensionsOnOverprovisionedVMs: boolean;
    /** @description Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
     * @since 2019-12-01
     */
    additionalCapabilities: AdditionalCapabilities;
    /** @description Specifies the scale-in policy that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in.
     * @since 2019-12-01
     */
    scaleInPolicy: ScaleInPolicy;
}
