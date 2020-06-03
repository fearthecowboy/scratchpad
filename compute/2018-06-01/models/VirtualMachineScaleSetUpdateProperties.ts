import { UpgradePolicy } from './UpgradePolicy';
import { VirtualMachineScaleSetUpdateVMProfile } from './VirtualMachineScaleSetUpdateVMProfile';
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
    /**
     * @description Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. <br><br>Minimum api-version: 2018-04-01.
     */
    proximityPlacementGroup: SubResource;
}
