export interface ResourceSkuRestrictionInfo {
    /**
     * @description Locations where the SKU is restricted
     */
    readonly locations: Array<string>;
    /**
     * @description List of availability zones where the SKU is restricted.
     */
    readonly zones: Array<string>;
}
