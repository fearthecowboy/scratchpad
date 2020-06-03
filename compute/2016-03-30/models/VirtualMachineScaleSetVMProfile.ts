import { VirtualMachineScaleSetOSProfile } from './VirtualMachineScaleSetOSProfile';
import { VirtualMachineScaleSetStorageProfile } from './VirtualMachineScaleSetStorageProfile';
import { VirtualMachineScaleSetNetworkProfile } from './VirtualMachineScaleSetNetworkProfile';
import { VirtualMachineScaleSetExtensionProfile } from './VirtualMachineScaleSetExtensionProfile';
/**
 * @description Describes a virtual machine scale set virtual machine profile.
 */
export interface VirtualMachineScaleSetVMProfile {
    /**
     * @description The virtual machine scale set OS profile.
     */
    osProfile: VirtualMachineScaleSetOSProfile;
    /**
     * @description The virtual machine scale set storage profile.
     */
    storageProfile: VirtualMachineScaleSetStorageProfile;
    /**
     * @description The virtual machine scale set network profile.
     */
    networkProfile: VirtualMachineScaleSetNetworkProfile;
    /**
     * @description The virtual machine scale set extension profile.
     */
    extensionProfile: VirtualMachineScaleSetExtensionProfile;
}
