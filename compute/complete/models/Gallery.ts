import { GalleryProperties } from './GalleryProperties';
import { Resource } from './Resource';

/**
 * @description Specifies information about the Shared Image Gallery that you want to create or update.
 * @since 2018-06-01
 */
export interface Gallery extends Resource {
    properties: GalleryProperties;
}
