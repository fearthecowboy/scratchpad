import { VirtualMachineScaleSetSku } from './VirtualMachineScaleSetSku';

/**
 * @description The Virtual Machine Scale Set List Skus operation response.
 */
export interface VirtualMachineScaleSetListSkusResult {
    /**
     * @description The list of skus available for the virtual machine scale set.
     * @Readonly  '2016-03-30' - removed readonly
     * @Optional  '2016-03-30' - made property optional
     */
    value?: Array<VirtualMachineScaleSetSku>;
    /**
     * @description The URI to fetch the next page of skus available for the virtual machine scale set. Call ListNext() with this to fetch the next page of skus available for the virtual machine scale set.
     */
    nextLink: string;
}
