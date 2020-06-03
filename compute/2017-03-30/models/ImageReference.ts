import { SubResource } from './SubResource';
/**
 * @description Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. NOTE: Image reference publisher and offer can only be set when you create the scale set.
 */
export interface ImageReference extends SubResource {
    /**
     * @description The image publisher.
     */
    publisher: string;
    /**
     * @description Specifies the offer of the platform image or marketplace image used to create the virtual machine.
     */
    offer: string;
    /**
     * @description The image SKU.
     */
    sku: string;
    /**
     * @description Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available.
     */
    version: string;
}
