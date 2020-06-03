import { GalleryIdentifier } from './GalleryIdentifier';
/**
 * @description Describes the properties of a Shared Image Gallery.
 */
export interface GalleryProperties {
    /**
     * @description The description of this Shared Image Gallery resource. This property is updatable.
     */
    description: string;
    identifier: GalleryIdentifier;
    /**
     * @description The provisioning state, which only appears in the response.
     */
    readonly provisioningState: "Creating" | "Updating" | "Failed" | "Succeeded" | "Deleting" | "Migrating";
}
