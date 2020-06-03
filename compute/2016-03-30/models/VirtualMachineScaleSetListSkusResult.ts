import { VirtualMachineScaleSetSku } from './VirtualMachineScaleSetSku';
/**
 * @description The Virtual Machine Scale Set List Skus operation response.
 */
export interface VirtualMachineScaleSetListSkusResult {
    /**
     * @description The list of skus available for the virtual machine scale set.
     */
    value?: Array<VirtualMachineScaleSetSku>;
    /**
     * @description The uri to fetch the next page of Virtual Machine Scale Set Skus. Call ListNext() with this to fetch the next page of VMSS Skus.
     */
    nextLink: string;
}
