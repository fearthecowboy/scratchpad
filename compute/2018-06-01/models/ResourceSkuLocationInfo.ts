export interface ResourceSkuLocationInfo {
    /**
     * @description Location of the SKU
     */
    readonly location: string ;
    /**
     * @description List of availability zones where the SKU is supported.
     */
    readonly zones: Array<string>;
}
