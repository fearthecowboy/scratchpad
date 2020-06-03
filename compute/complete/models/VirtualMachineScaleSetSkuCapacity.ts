import { VirtualMachineScaleSetSkuScaleType } from '../enums/VirtualMachineScaleSetSkuScaleType';

/**
 * @description Describes scaling information of a sku.
 */
export interface VirtualMachineScaleSetSkuCapacity {
    /**
     * @description The minimum capacity.
     */
    readonly minimum: int64;
    /**
     * @description The maximum capacity that can be set.
     */
    readonly maximum: int64;
    /**
     * @description The default capacity.
     */
    readonly defaultCapacity: int64;
    /**
     * @description The scale type applicable to the sku.
     */
    readonly scaleType: VirtualMachineScaleSetSkuScaleType;
}
