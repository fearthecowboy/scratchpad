import { Resource } from './Resource';
import { Sku } from './Sku';
import { VirtualMachineScaleSetProperties } from './VirtualMachineScaleSetProperties';
/**
 * @description Describes a Virtual Machine Scale Set.
 */
export interface VirtualMachineScaleSet extends Resource {
    /**
     * @description The virtual machine scale set sku.
     */
    sku: Sku;
    properties: VirtualMachineScaleSetProperties;
}
