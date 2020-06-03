import { GalleryImageVersionProperties } from './GalleryImageVersionProperties';
import { Resource } from './Resource';

/**
 * @description Specifies information about the gallery Image Version that you want to create or update.
 * @since 2018-06-01
 */
export interface GalleryImageVersion extends Resource {
    properties: GalleryImageVersionProperties;
}
