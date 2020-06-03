import { VirtualMachineScaleSet } from './VirtualMachineScaleSet';

/**
 * @description The List Virtual Machine operation response.
 */
export interface VirtualMachineScaleSetListWithLinkResult {
    /**
     * @description The list of virtual machine scale sets.
     * @Optional  '2016-03-30' - made property optional
     */
    value?: Array<VirtualMachineScaleSet>;
    /**
     * @description The uri to fetch the next page of Virtual Machine Scale Sets. Call ListNext() with this to fetch the next page of Virtual Machine Scale Sets.
     */
    nextLink: string;
}
