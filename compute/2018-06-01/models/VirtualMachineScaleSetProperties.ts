import { UpgradePolicy } from './UpgradePolicy';
import { VirtualMachineScaleSetVMProfile } from './VirtualMachineScaleSetVMProfile';
import { SubResource } from './SubResource';
/**
 * @description Describes the properties of a Virtual Machine Scale Set.
 */
export interface VirtualMachineScaleSetProperties {
    /**
     * @description The upgrade policy.
     */
    upgradePolicy: UpgradePolicy;
    /**
     * @description The virtual machine profile.
     */
    virtualMachineProfile: VirtualMachineScaleSetVMProfile;
    /**
     * @description The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string ;
    /**
     * @description Specifies whether the Virtual Machine Scale Set should be overprovisioned.
     */
    overprovision: boolean;
    /**
     * @description Specifies the ID which uniquely identifies a Virtual Machine Scale Set.
     */
    readonly uniqueId: string ;
    /**
     * @description When true this limits the scale set to a single placement group, of max size 100 virtual machines.
     */
    singlePlacementGroup: boolean;
    /**
     * @description Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage.
     */
    zoneBalance: boolean;
    /**
     * @description Fault Domain count for each placement group.
     */
    platformFaultDomainCount: int32;
    /**
     * @description Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. <br><br>Minimum api-version: 2018-04-01.
     */
    proximityPlacementGroup: SubResource;
}
