import { UpgradePolicy } from './UpgradePolicy';
import { AutomaticRepairsPolicy } from './AutomaticRepairsPolicy';
import { VirtualMachineScaleSetUpdateVMProfile } from './VirtualMachineScaleSetUpdateVMProfile';
import { AdditionalCapabilities } from './AdditionalCapabilities';
import { ScaleInPolicy } from './ScaleInPolicy';
import { SubResource } from './SubResource';
/**
 * @description Describes the properties of a Virtual Machine Scale Set.
 */
export interface VirtualMachineScaleSetUpdateProperties {
    /**
     * @description The upgrade policy.
     */
    upgradePolicy: UpgradePolicy;
    /**
     * @description Policy for automatic repairs.
     */
    automaticRepairsPolicy: AutomaticRepairsPolicy;
    /**
     * @description The virtual machine profile.
     */
    virtualMachineProfile: VirtualMachineScaleSetUpdateVMProfile;
    /**
     * @description Specifies whether the Virtual Machine Scale Set should be overprovisioned.
     */
    overprovision: boolean;
    /**
     * @description When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs.
     */
    doNotRunExtensionsOnOverprovisionedVMs: boolean;
    /**
     * @description When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true.
     */
    singlePlacementGroup: boolean;
    /**
     * @description Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
     */
    additionalCapabilities: AdditionalCapabilities;
    /**
     * @description Specifies the scale-in policy that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in.
     */
    scaleInPolicy: ScaleInPolicy;
    /**
     * @description Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. <br><br>Minimum api-version: 2018-04-01.
     */
    proximityPlacementGroup: SubResource;
}
