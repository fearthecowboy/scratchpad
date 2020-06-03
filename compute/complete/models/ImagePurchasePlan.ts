
/**
 * @description Describes the gallery Image Definition purchase plan. This is used by marketplace images.
 * @since 2018-06-01
 */
export interface ImagePurchasePlan {
    /**
     * @description The plan ID.
     */
    name: string;
    /**
     * @description The publisher ID.
     */
    publisher: string;
    /**
     * @description The product ID.
     */
    product: string;
}
