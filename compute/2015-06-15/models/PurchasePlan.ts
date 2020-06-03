
/**
 * @description Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.
 */
export interface PurchasePlan {
    /**
     * @description The publisher ID.
     */
    publisher?: string;
    /**
     * @description The plan ID.
     */
    name?: string;
    /**
     * @description Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
     */
    product?: string;
}
