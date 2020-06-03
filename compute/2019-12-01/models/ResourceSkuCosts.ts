
/**
 * @description Describes metadata for retrieving price info.
 */
export interface ResourceSkuCosts {
    /**
     * @description Used for querying price from commerce.
     */
    readonly meterID: string ;
    /**
     * @description The multiplier is needed to extend the base metered cost.
     */
    readonly quantity: int64;
    /**
     * @description An invariant to show the extended unit.
     */
    readonly extendedUnit: string ;
}
