import { VirtualMachineScaleSetVM } from './VirtualMachineScaleSetVM';
/**
 * @description The List Virtual Machine Scale Set VMs operation response.
 */
export interface VirtualMachineScaleSetVMListResult {
    /**
     * @description The list of virtual machine scale sets VMs.
     */
    value?: Array<VirtualMachineScaleSetVM>;
    /**
     * @description The uri to fetch the next page of Virtual Machine Scale Set VMs. Call ListNext() with this to fetch the next page of VMSS VMs
     */
    nextLink: string;
}
