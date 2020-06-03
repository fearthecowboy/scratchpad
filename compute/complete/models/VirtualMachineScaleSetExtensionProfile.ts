import { VirtualMachineScaleSetExtension } from './VirtualMachineScaleSetExtension';

/**
 * @description Describes a virtual machine scale set extension profile.
 */
export interface VirtualMachineScaleSetExtensionProfile {
    /**
     * @description The virtual machine scale set child extension resources.
     */
    extensions: Array<VirtualMachineScaleSetExtension>;
}
