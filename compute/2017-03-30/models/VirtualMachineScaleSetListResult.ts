import { VirtualMachineScaleSet } from './VirtualMachineScaleSet';
/**
 * @description The List Virtual Machine operation response.
 */
export interface VirtualMachineScaleSetListResult {
    /**
     * @description The list of virtual machine scale sets.
     */
    value?: Array<VirtualMachineScaleSet>;
    /**
     * @description The uri to fetch the next page of Virtual Machine Scale Sets. Call ListNext() with this to fetch the next page of VMSS.
     */
    nextLink: string;
}
