import { GalleryImageProperties } from './GalleryImageProperties';
import { Resource } from './Resource';

/**
 * @description Specifies information about the gallery Image Definition that you want to create or update.
 * @since 2018-06-01
 */
export interface GalleryImage extends Resource {
    properties: GalleryImageProperties;
}
