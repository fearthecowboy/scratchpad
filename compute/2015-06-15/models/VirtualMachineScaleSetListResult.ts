import { VirtualMachineScaleSet } from './VirtualMachineScaleSet';
/**
 * @description The List Virtual Machine operation response.
 */
export interface VirtualMachineScaleSetListResult {
    /**
     * @description The list of virtual machine scale sets.
     */
    value: Array<VirtualMachineScaleSet>;
    /**
     * @description The URI to fetch the next page of virtual machine scale sets. Call ListNext() with this to fetch the next page of virtual machine scale sets.
     */
    nextLink: string;
}
