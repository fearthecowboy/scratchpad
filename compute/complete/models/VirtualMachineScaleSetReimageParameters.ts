import { VirtualMachineScaleSetVMReimageParameters } from './VirtualMachineScaleSetVMReimageParameters';
/**
 * @description Describes a Virtual Machine Scale Set VM Reimage Parameters.
 * @since 2019-12-01
 */
export interface VirtualMachineScaleSetReimageParameters extends VirtualMachineScaleSetVMReimageParameters {
    /**
     * @description The virtual machine scale set instance ids. Omitting the virtual machine scale set instance ids will result in the operation being performed on all virtual machines in the virtual machine scale set.
     */
    instanceIds: Array<string>;
}
