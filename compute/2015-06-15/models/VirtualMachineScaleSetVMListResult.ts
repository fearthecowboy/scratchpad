import { VirtualMachineScaleSetVM } from './VirtualMachineScaleSetVM';
/**
 * @description The List Virtual Machine Scale Set VMs operation response.
 */
export interface VirtualMachineScaleSetVMListResult {
    /**
     * @description The list of virtual machine scale sets VMs.
     */
    value: Array<VirtualMachineScaleSetVM>;
    /**
     * @description The URI to fetch the next page of virtual machine scale sets VMs. Call ListNext() with this to fetch the next page of virtual machine scale sets VMs.
     */
    nextLink: string;
}
