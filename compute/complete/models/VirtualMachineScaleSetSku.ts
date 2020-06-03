import { Sku } from './Sku';
import { VirtualMachineScaleSetSkuCapacity } from './VirtualMachineScaleSetSkuCapacity';

/**
 * @description Describes an available virtual machine scale set sku.
 */
export interface VirtualMachineScaleSetSku {
    /**
     * @description The type of resource the sku applies to.
     */
    readonly resourceType: string ;
    /**
     * @description The Sku.
     */
    readonly sku: Sku;
    /**
     * @description Specifies the number of virtual machines in the scale set.
     */
    readonly capacity: VirtualMachineScaleSetSkuCapacity;
}
