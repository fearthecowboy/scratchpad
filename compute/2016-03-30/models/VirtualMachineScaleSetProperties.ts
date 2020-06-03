import { UpgradePolicy } from './UpgradePolicy';
import { VirtualMachineScaleSetVMProfile } from './VirtualMachineScaleSetVMProfile';
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
    overProvision: boolean;
}
