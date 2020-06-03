
/**
 * @description Describes The SKU capabilities object.
 * @since 2017-03-30
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
