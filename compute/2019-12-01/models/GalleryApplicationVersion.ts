import { Resource } from './Resource';
import { GalleryApplicationVersionProperties } from './GalleryApplicationVersionProperties';
/**
 * @description Specifies information about the gallery Application Version that you want to create or update.
 */
export interface GalleryApplicationVersion extends Resource {
    properties: GalleryApplicationVersionProperties;
}
