import { Resource } from './Resource';
import { GalleryImageVersionProperties } from './GalleryImageVersionProperties';
/**
 * @description Specifies information about the gallery Image Version that you want to create or update.
 */
export interface GalleryImageVersion extends Resource {
    properties: GalleryImageVersionProperties;
}
