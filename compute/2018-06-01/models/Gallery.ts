import { Resource } from './Resource';
import { GalleryProperties } from './GalleryProperties';
/**
 * @description Specifies information about the Shared Image Gallery that you want to create or update.
 */
export interface Gallery extends Resource {
    properties: GalleryProperties;
}
