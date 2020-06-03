
/**
 * @description Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
 */
export interface Plan {
    /**
     * @description The plan ID.
     */
    name: string;
    /**
     * @description The publisher ID.
     */
    publisher: string;
    /**
     * @description Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
     */
    product: string;
    /**
     * @description The promotion code.
     */
    promotionCode: string;
}
