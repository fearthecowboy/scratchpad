import { ResourceSkuCapacityScaleType } from '../enums/ResourceSkuCapacityScaleType';
/**
 * @description Describes scaling information of a SKU.
 */
export interface ResourceSkuCapacity {
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
    readonly default: int64;
    /**
     * @description The scale type applicable to the sku.
     */
    readonly scaleType: ResourceSkuCapacityScaleType;
}
