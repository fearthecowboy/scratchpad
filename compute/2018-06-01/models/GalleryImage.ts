import { Resource } from './Resource';
import { GalleryImageProperties } from './GalleryImageProperties';
/**
 * @description Specifies information about the gallery Image Definition that you want to create or update.
 */
export interface GalleryImage extends Resource {
    properties: GalleryImageProperties;
}
