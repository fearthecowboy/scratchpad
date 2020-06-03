
/**
 * @description Describes The SKU capabilities object.
 */
export interface ResourceSkuCapabilities {
    /**
     * @description An invariant to describe the feature.
     */
    readonly name: string ;
    /**
     * @description An invariant if the feature is measured by quantity.
     */
    readonly value: string ;
}
